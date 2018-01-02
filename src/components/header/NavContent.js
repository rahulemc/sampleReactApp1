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

class NavContent extends React.Component {
  render() {
    return (
<div>
     <BreadcrumbsItem to={mainPath+'/developerResource'}>
            Developer Resource 
     </BreadcrumbsItem>
    <div id="app" className="container">
    
            <ul className="navbar">
                <li className="nav-item">
                    <NavItem exact className="nav-link" to={mainPath+'/developerResource/demoApplication'} > demo Applications </NavItem>
                </li>
                
            </ul>
       
        </div>
     </div> 

    );
  }
}

export default NavContent;


