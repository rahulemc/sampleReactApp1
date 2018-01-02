import React from 'react';
import {NavLink} from 'react-router-dom';
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

import {mainPath} from '../MainPath'


const NavItem = ({to,...props}) => (
  <LinkContainer to={to||mainPath}>
    <NItem {...props}></NItem>
  </LinkContainer>
)


class Header extends React.Component {



  render() {
    return (
<div>
      <nav className="sub-header navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <h3>Halo</h3>
                  <div className="breadcrumbSection">
                      <BreadcrumbsItem  to={mainPath}>
                        Home 
                      </BreadcrumbsItem>
                        <BreadcrumbsSimple/>
                  </div>
              </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavItem exact  className="nav-link" to={mainPath+'/developerResource'} >Developer Resource </NavItem>
            </li>
            <li className="nav-item">
              <NavItem  className="nav-link" to= {mainPath+'/futurelink'}>Future Link 1</NavItem>
            </li>
            <li className="nav-item"> 
                <NavItem  className="nav-link" to= {mainPath+'/futurelink2'} >Future Link 2</NavItem>
            </li>
          </ul>
        </div>
    </nav>

 
     </div> 

    );
  }
}

export default Header;



/**<nav className="sub-header navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact activeClassName="activeNav" className="nav-link" to="/">Home<span className="sr-only">(current)</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="activeNav" className="nav-link" to="/features">Features</NavLink>
      </li>
      <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuNavLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Admin
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuNavLink">
          <NavLink activeClassName="activeNav" className="dropdown-item" to="/admin">Admin</NavLink>
        </div>
      </li>
    </ul>
  </div>
</nav> 

  <div>
          <ul className="header">
            <li><NavLink exact to="/">Developer Resource</NavLink></li>
            <li><NavLink to="/features">Future Link 2</NavLink></li>
            <li><NavLink to="/admin">Future Link 2</NavLink></li>
          </ul>
        </div>
*/