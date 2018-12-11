const MarkdownItContainer = require('markdown-it-container');
const cheerio = require('cheerio');

function convertHtml(str) {
  return str.replace(/(&#x)(\w{4});/gi, $0 => String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16)))
}

function wrapCustomClass(render) {
  return function (...args) {
    return render(...args)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}

function striptags(str, tags) {
  const $ = cheerio.load(str, {decodeEntities: false});

  if (!tags || tags.length === 0) {
    return str
  }

  tags = !Array.isArray(tags) ? [tags] : tags;
  let len = tags.length;

  while (len--) {
    $(tags[len]).remove();
  }

  return $.html();
}

module.exports = {
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        wrapper: 'div',

        preset: 'default',
        breaks: true,
        preprocess: function (MarkdownIt, source) {
          MarkdownIt.renderer.rules.table_open = function () {
            return '<table class="demo-table">'
          };
          MarkdownIt.renderer.rules.fence = wrapCustomClass(MarkdownIt.renderer.rules.fence);

          // ```html `` 给这种样式加个class hljs
          //  但是markdown-it 有个bug fence整合attr的时候直接加载class数组上而不是class的值上
          //  markdown-it\lib\renderer.js 71行 这么修改可以修复bug
          //  tmpAttrs[i] += ' ' + options.langPrefix + langName; --> tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
          // const fence = MarkdownIt.renderer.rules.fence
          // MarkdownIt.renderer.rules.fence = function(...args){
          //   args[0][args[1]].attrJoin('class', 'hljs')
          //   var a = fence(...args)
          //   return a
          // }

          // ```code`` 给这种样式加个class code_inline
          const code_inline = MarkdownIt.renderer.rules.code_inline;
          MarkdownIt.renderer.rules.code_inline = function (...args) {
            args[0][args[1]].attrJoin('class', 'code_inline');
            return code_inline(...args)
          };
          return source
        },
        use: [
          [MarkdownItContainer, 'demo', {
            // 用于校验包含demo的代码块
            validate: params => params.trim().match(/^demo\s*(.*)$/),
            render: function (tokens, idx) {

              // let m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

              if (tokens[idx].nesting === 1) {
                // let desc = tokens[idx + 2].content;
                // 编译成html
                const html = convertHtml(striptags(tokens[idx + 1].content, 'script'));

                // 移除描述，防止被添加到代码块
                tokens[idx + 2].children = [];

                return `<demo-block>
                        <div slot="desc">${html}</div>
                        <div slot="highlight">`;
              }
              return '</div></demo-block>\n';
            }
          }]
        ]
      })
  },
  // pages: {
  //   index: {
  //     // 页面的入口文件
  //     entry: 'src/index/main.js',
  //     // 页面的模板文件
  //     template: 'public/index.html',
  //     // build 生成的文件名称  例： dist/index.html
  //     filename: 'index.html'
  //   },
  //   // template 默认会去找 public/subpage.html 页面，如果找不到会使用 public/index.html 文件
  //   // 输出文件会默认的推断为 subpage.html
  //   subpage: 'src/subpage/main.js'
  // }
};
