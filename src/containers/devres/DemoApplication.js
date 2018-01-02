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
import DataTable from './DataTable';


//import {Table, Column, Cell} from 'fixed-data-table-2';
//import 'fixed-data-table-2/dist/fixed-data-table.css';


const sub_path = mainPath+'/developerResource/';

const NavItem = ({to,...props}) => (
  <LinkContainer to={to||mainPath}>
    <NItem {...props}></NItem>
  </LinkContainer>
)




class DemoApplication extends React.Component {

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
                      
                      <DataTable />
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