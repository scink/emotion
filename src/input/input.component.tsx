import * as React from 'react';
import {ChangeEvent, ComponentClass, PureComponent} from 'react';
import {Button} from '../button/button.component';
import styled, {css, cx} from 'react-emotion';

const defaultStyle = css({
	margin: 10,
	display: 'inline-block',
});

export type TInputProps = {
	className?: string;
};

export type TInputState = {
	value: string;
};

class RawInput extends PureComponent<TInputProps, TInputState> {
	public readonly state: TInputState = {
		value: '',
	};

	public render() {
		const {className} = this.props;
		const {value} = this.state;

		return (
			<div className={cx(defaultStyle, className)}>
				<input onChange={this.handleInput} value={value} />
				<Button>Click</Button>
			</div>
		);
	}

	private handleInput = (e: ChangeEvent<HTMLInputElement>) => this.setState({value: e.target.value});
}

export const Input: ComponentClass<TInputProps, TInputState> = styled(RawInput)();
