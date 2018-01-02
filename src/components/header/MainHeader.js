import React, { Component } from 'react';
//import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import SearchHeader from './SearchHeader';

class MainHeader extends  React.Component{

    render(){
        return(
            <div className="header-info">
                <SearchHeader />
                <Link to="/help" className="help-link" > Help</Link>
            </div>);
    }
}
export default MainHeader;