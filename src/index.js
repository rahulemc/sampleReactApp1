import React from 'react';
import ReactDOM from 'react-dom';
//import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from './components/routes/Routes.js';
import Header from './components/header/Header.js';
import MainHeader from './components/header/MainHeader.js';
import Footer from './components/footer/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css'; // styles bootstrap
import './index.css';
import './components/header/header.css';
import './components/footer/footer.css';
import './components/breadcrumb.css';
import './containers/devres/myapp.css';


import {BreadcrumbsProvider} from 'react-breadcrumbs-dynamic';

window.$ = window.jQuery = require('jquery');  // Required for Bootstrap 4
window.Popper = require('popper.js').default; // Required for Bootstrap 4
require('bootstrap');  // Needed only for Bootstrap JavaScript features


const reactApp = (
<BrowserRouter>
	<BreadcrumbsProvider>
		<Router>
			<div>
				<MainHeader />
				<Header />
				<Routes />
				<Footer />
			</div>
		</Router>
	</BreadcrumbsProvider>
</BrowserRouter>
	
	
)

ReactDOM.render(reactApp, document.getElementById('root'));
// registerServiceWorker();