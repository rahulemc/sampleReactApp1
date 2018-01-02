import React from 'react';
import {NavLink} from 'react-router-dom';
import {mainPath} from '../MainPath'
import {
  Glyphicon,
  Navbar,
  Nav,
  NavDropdown,
  NavItem as NItem,
  MenuItem as MItem } from 'react-bootstrap';
  import { LinkContainer } from 'react-router-bootstrap';

import {Breadcrumbs} from 'react-breadcrumbs-dynamic';
import { BreadcrumbsWithIcon, BreadcrumbsSimple } from '../Breadcrumbs';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';



const NavItem = ({to,...props}) => (
  <LinkContainer to={to||mainPath}>
    <NItem {...props}></NItem>
  </LinkContainer>
)

class NavHeader extends React.Component {
  render() {
    return (
<div>
     <BreadcrumbsItem to={mainPath+'/developerResource'}>
            Developer Resource 
     </BreadcrumbsItem>
    <div id="app" className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-faded sub-inner-nav">
        <div id="navbarNavDropdown" className="navbar-collapse collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <h4><a className="nav-link" >Developer Resource</a></h4>
                </li>
            </ul>
            <ul className="navbar-nav">
                
                <li className="nav-item">
                    <NavItem exact className="nav-link" to={mainPath+'/developerResource/myApplication'} > My Applications </NavItem>
                </li>
                <li className="nav-item">
                     <NavItem exact className="nav-link" to={mainPath+'/developerResource/BusinessUnits'} ><span className="pillar-space"> | </span> Business Units </NavItem>
                </li>
                 <li className="nav-item">
                     <NavItem exact className="nav-link" to={mainPath+'/developerResource/SubBusinessUnits'} ><span className="pillar-space"> | </span> Sub Business Units </NavItem>
                </li>
                 <li className="nav-item">
                     <NavItem exact className="nav-link" to={mainPath+'/developerResource/Families'} ><span className="pillar-space"> | </span> Families </NavItem>
                   
                </li>
                
            </ul>
        </div>
    </nav>
</div>
     </div> 

    );
  }
}

export default NavHeader;


