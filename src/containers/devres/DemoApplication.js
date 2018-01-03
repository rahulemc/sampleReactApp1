import React from 'react';
import NavHeader from '../../components/header/Nav-Header';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

import {mainPath} from '../../components/MainPath';

import {
  Glyphicon,
  Navbar,
  Nav,
  NavDropdown,
  NavItem as NItem,
  MenuItem as MItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Breadcrumbs} from 'react-breadcrumbs-dynamic';
import { BreadcrumbsWithIcon, BreadcrumbsSimple } from '../../components/Breadcrumbs';

import DemoAppSideNav from './DemoAppSideNav';
//import DataTable from './DataTable';


import {Table, Column, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';


const sub_path = mainPath+'/developerResource/';

const NavItem = ({to,...props}) => (
  <LinkContainer to={to||mainPath}>
    <NItem {...props}></NItem>
  </LinkContainer>
)

const rows = [
  "first row",
  "second row",
  "third row"
  // .... and more
];
 
// Custom cell implementation with special prop
/*const MyCustomCell = ({ mySpecialProp }) =>
  <Cell>
    {mySpecialProp === "column2" ? "I'm column 2" : "I'm not column 3"}
</Cell>; */
 


class DemoApplication extends React.Component {

  constructor(props) {
  super(props);
  this.rows = //json data
  this.state = {
    filteredDataList: this.rows
  };
}
  render() {
    return (

      <div>
        <BreadcrumbsItem  to={sub_path+'/myApplication/demoApplication'}>
           Demo Application
        </BreadcrumbsItem>
        <NavHeader />
        <div className="container-fluid">
	        <div className="col-sm-12">
            <div className="">
              <div className="title-text"><h5>Demo Application </h5></div> 
              <div className="title-text"> <h6>Application Description :</h6> </div> 
             
            </div>

            <div className="container my-app-create-section">
                <div className="row">
                  <div className="col-md-2">
                    <DemoAppSideNav />
 
                  </div>
                  <div className="col-md-10 demo-app-header">
                      <ul className="navbar-menu">
                          <a className="nav-item">
                            <NavItem exact className="nav-link" > Demo Business Unit </NavItem>
                        </a>
                         <a className="nav-item">
                            <NavItem exact className="nav-link" ><span className="pillar-space"> | </span> Demo Sub Business Unit  </NavItem>
                        </a>
                         <a className="nav-item">
                            <NavItem exact className="nav-link" > <span className="pillar-space"> | </span> Demo Families </NavItem>
                        </a>
                    </ul>
                      <Table
                          rowHeight={50}
                          rowsCount={rows.length}
                          width={900}
                          height={250}
                          headerHeight={50}>
                          <Column
                            header={<Cell>Col 1</Cell>}
                            cell={<Cell>Column 1 static content</Cell>}
                            width={300}
                          />
                          <Column
                            header={<Cell>Col 2</Cell>}
                            //cell={<MyCustomCell mySpecialProp="column2" />}
                              cell={<Cell>Column 2 static content</Cell>}
                            width={300}
                          />
                          <Column
                            header={<Cell>Col 3</Cell>}
                          /*  cell={({rowIndex, ...props}) => (
                              <Cell {...props}> Data for column 3: {rows[rowIndex]}</Cell>
                            )}*/
                              cell={<Cell>Column 3 static content</Cell>}
                            width={300}
                          />
                        </Table>,
                  </div>
                 
                </div>
            </div>       
	        </div>
        </div>

        </div>
    );
  }
}

export default DemoApplication;