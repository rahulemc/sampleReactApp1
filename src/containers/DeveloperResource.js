import React from 'react';
import $ from 'jquery';
import NavHeader from '../components/header/Nav-Header';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

import {mainPath} from '../components/MainPath'

class DeveloperResource extends React.Component {
	constructor(props) {
	super(props);
	this.state={};
	//this.goRoot= this.goRoot.bind(this);
	}
	
	componentDidMount(){
        $(document).ready(function(){
            $(".textfromjquery").text("Welcom page.");
        });
    	}

    /*	goRoot(){
		//console.log('Button clicked, go to root');
		this.props.history.push('/');
    }*/
    
render() {
    return ( 
        <div>
       
        <div className=" ">
            <NavHeader />
            <div className="col-sm-12">
	    	<p className="textfromjquery">loading...</p> 
            </div>
        </div>
        </div>
    );
  }
}

export default DeveloperResource;


/**<button type="button" onClick={this.goRoot} className="btn btn-primary">Go to root</button> */