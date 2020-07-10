import React, {useState} from "react";
import {Col} from "reactstrap";
import SortableTree from "react-sortable-tree";
import FileExplorerTheme from 'react-sortable-tree-theme-full-node-drag';

export const TreeViewer = () => {
  const [data, setData] = useState([
    {title: "industry1", subtitle: "subtitle", children: [{title: "organization1"}]},
    {title: "industry2", subtitle: "subtitle", children: [{title: "organization2"}]},
    {title: "industry3", subtitle: "subtitle", children: [{title: "organization3"}]},
    {title: "industry4", subtitle: "subtitle", children: [{title: "organization4"}]},
    {title: "industry5", subtitle: "subtitle", children: [{title: "organization5"}]},
  ]);

  return (<Col>
    <div style={{height: '67vw'}}>
      <SortableTree treeData={data}
                    onChange={d => setData(d)}
                    theme={FileExplorerTheme} />
    </div>
  </Col>)
}

// create types of Nodes from a base TreeNode<T> class
