import * as React from 'react';
import {PureComponent} from 'react';
import styled, {css} from 'react-emotion';
import {Button} from '../button/button.component';

const StyledForm = styled.form`
	padding: 20;
	& > ${Button} {
		padding: 10px;
	}
`;

const textCss = css`
	background: skyblue;
`;

export type TFormProps = {};

export class Form extends PureComponent<TFormProps> {
	public render() {
		return (
			<StyledForm>
				<Button textCss={textCss}>Click Me</Button>
			</StyledForm>
		);
	}
}
