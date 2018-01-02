import React from 'react';
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


class DemoAppSideNav extends React.Component {
  render() {
    return (

      <div className="DemoAppSideNav-link-section">
          <ul className="box-tiems-list">
              <li className="box-items">
                  Summary
              </li>
              <li className="box-items">
                  Classifications
              </li>
               <li className="box-items">
                  Deployments
              </li>
               <li className="box-items">
                  Deployments Models
              </li>
              <li className="box-items">
                  Dev Projects
              </li>
          </ul>
	    </div>
       
    );
  }
}

export default DemoAppSideNav;