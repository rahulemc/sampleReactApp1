import React from 'react';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

import {mainPath} from '../components/MainPath'

class FutureLink extends React.Component {
  render() {
    return (
      <div>
       <BreadcrumbsItem glyph='user' to={mainPath+'/FutureLink'}>
           FutureLink
        </BreadcrumbsItem>
        <div className="container-fluid">
	        <div className="col-sm-12">
	        	<p>FutureLink page</p>
	        </div>
        </div>

        </div>
    );
  }
}

export default FutureLink;