import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../containers/Home';
import DeveloperResource from '../../containers/DeveloperResource';
import NoMatch from '../../containers/NoMatch';
import FutureLink from '../../containers/FutureLink';
import createBrowserHistory from 'history/createBrowserHistory';

import MyApplication from '../../containers/devres/MyApplication';
import DemoApplication from '../../containers/devres/DemoApplication';

import {mainPath} from '../MainPath'

const history = createBrowserHistory();

class Routes extends React.Component {
  render() {
    return (
    <Switch>
	    <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
	    <Route exact path={`${mainPath}/developerResource`}  component={DeveloperResource} history={history}/>
	    <Route exact path={`${mainPath}/futurelink`} component={FutureLink}/>


	    <Route exact path={`${mainPath}/developerResource/myApplication`} component={MyApplication} />

	    <Route exact path={`${mainPath}/developerResource/demoApplication`} component={DemoApplication} />
	    <Route component={NoMatch}/>
  	</Switch>
    );
  }
}

export default Routes;