export function getTreeData(data = [], keyName = 'id', parentKeyName = "pid", parentKeyValue = "") {
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
