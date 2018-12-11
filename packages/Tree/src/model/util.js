export const NODE_KEY = '$treeNodeId';

export const markNodeData = function (node, data) {
  if (!data || data[NODE_KEY]) return;
  Object.defineProperty(data, NODE_KEY, {
    value: node.id,
    enumerable: false,
    configurable: false,
    writable: false
  });
};

export const getNodeKey = function (key, data) {
  if (!key) return data[NODE_KEY];
  return data[key];
};

export const findNearestComponent = (element, componentName) => {
  let target = element;
  while (target && target.tagName !== 'BODY') {
    if (target.__vue__ && target.__vue__.$options.name === componentName) {
      return target.__vue__;
    }
    target = target.parentNode;
  }
  return null;
};

export const getTreeData = (data = [], keyName = 'id', parentKeyName = "pid", parentKeyValue = "") => {
  let _data = {};
  let p_data = {};

  data.map(item => {
    _data[item[keyName]] = item;
    if (!p_data[item[parentKeyName]]) p_data[item[parentKeyName]] = {};
    p_data[item[parentKeyName]][item[keyName]] = item;
  });

  let root_data = p_data[parentKeyValue];
  let $root_data = [];

  function getChildren(item, src) {
    let $children = [];
    let item_children_list = src[item[keyName]]
    for (let key in item_children_list) {
      let child = item_children_list[key];
      let item_children = getChildren(child, src);
      child.children = item_children;
      $children.push(child);
    }
    return $children;
  }

  for (let key in root_data) {
    let root = root_data[key];
    let item_children = getChildren(root, p_data);
    root.children = item_children;
    $root_data.push(root)
  }
  return $root_data;
}

