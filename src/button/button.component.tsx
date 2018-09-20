import * as React from 'react';
import {PureComponent} from 'react';

export type TButtonProps = {
	className?: string;
};

export class Button extends PureComponent<TButtonProps> {
	public render() {
		const {className} = this.props;

		return <button>qwe</button>;
	}
}