import React, { Component } from 'react'
import {  Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import {mainPath} from './MainPath'

import { Breadcrumbs } from 'react-breadcrumbs-dynamic';

const Item = ({to,...props}) => (
  <LinkContainer to={to}>
    <Breadcrumb.Item {...props}>
    </Breadcrumb.Item>
  </LinkContainer>
)

export const BreadcrumbsSimple = () => (
  <Breadcrumbs
    container={Breadcrumb}
    item={Item}
    finalProps={{active: true}}
    duplicateProps={{to: 'href'}}
  />
)


