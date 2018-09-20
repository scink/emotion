import * as React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {FirstExample} from '../first-example/first-example.component';

class App extends React.Component {
	public render() {
		return (
			<div>
				<header className={'App-header'}>emotion</header>
				<BrowserRouter>
					<Route path={'/main'} component={FirstExample} />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
