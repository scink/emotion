import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/app.component';
import './index.css';

const root = document.getElementById('root');

const render = (Component: typeof App) => ReactDOM.render(<Component />, root);

render(App);

if (module.hot) {
	module.hot.accept(() => render(require('./app/app.component'))); // tslint:disable-line
}