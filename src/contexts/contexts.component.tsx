import * as React from 'react';
import {createContext, PureComponent} from 'react';
import {combine} from '../combine';

const contextA = createContext({
	a: 'classname-a-a',
	b: 'classname-a-b',
});

const contextB = createContext({
	c: 'classname-b-c',
	d: 'classname-b-d',
});

const SummContext = combine(contextA, contextB);

export class Contexts extends PureComponent {
	public render() {
		return <div />;
	}
}
