import React from 'react';
import NavHeader from '../../components/header/Nav-Header';
import NavContent from '../../components/header/NavContent';
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



const sub_path = mainPath+'/developerResource';

const NavItem = ({to,...props}) => (
  <LinkContainer to={to||mainPath}>
    <NItem {...props}></NItem>
  </LinkContainer>
)


class MyApplication extends React.Component {
  render() {
    return (

      <div>
        <BreadcrumbsItem  to={sub_path+'/myApplication'}>
           My Application
        </BreadcrumbsItem>
        <NavHeader />
        <div className="container-fluid">
	        <div className="col-sm-12">
            <div className="sub-title-section">
              <span className="title-text">My Application page</span> 
              <span className="select-editor">
                <select>
                <option  >Action</option>
                <option>Create New Application</option>
                </select>
              </span>
            </div>

            <div className="container my-app-create-section">
                <div className="row">
                  <div className="col-md-4">
                    <div className="box-title2"> Name </div>
                     <ul className="box-tiems-list">
                
                        <li className="box-items">
                            <NavItem exact className="nav-link" to={mainPath+'/developerResource/demoApplication'} > Demo Applications </NavItem>
                        </li>
                        <li className="box-items">
                            <NavItem exact className="nav-link" to={mainPath+'/developerResource/starApplication'} >Star Applications</NavItem>
                        </li>
                        <li className="box-items">
                            <NavItem exact className="nav-link" to={mainPath+'/developerResource/moonApplication'} > Moon Applications</NavItem>
                        </li>
                        
                    </ul>

                  </div>
                  <div className="col-md-4">
                   <div className="box-title2"> Description </div>
                  </div>
                  <div className="col-md-4">
                  <div className="box-title2">  Status </div>
                  </div>
                </div>
            </div>       
	        </div>
        </div>

        </div>
    );
  }
}

export default MyApplication;


/**<ul className="box-tiems-list">
                
                        <li className="box-items">
                            <NavItem exact className="nav-link" to={mainPath+'/developerResource/demoApplication'} > Demo Applications </NavItem>
                        </li>
                        <li className="box-items">
                            <NavItem exact className="nav-link" to={mainPath+'/developerResource/starApplication'} >Star Applications</NavItem>
                        </li>
                        <li className="box-items">
                            <NavItem exact className="nav-link" to={mainPath+'/developerResource/moonApplication'} > Moon Applications</NavItem>
                        </li>
                        
                    </ul> */