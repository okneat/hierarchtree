import './home.scss';
import 'react-sortable-tree/style.css';

import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'reactstrap';
import SortableTree from "react-sortable-tree";
import FileExplorerTheme from 'react-sortable-tree-theme-full-node-drag';
import {TreeViewer} from "app/modules/treeviewer/treeviewer";

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const {account} = props;

  return <Row>
    <Col md="4" />
    <Col md="4">
      {account && account.login ? <p>hi {account.login}</p> : null}
      <TreeViewer />
    </Col>
    <Col md="4" />
  </Row>;
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
