import * as React from 'react';
import {createContext, PureComponent} from 'react';
import {buttonStyle, textStyle} from './button.style';
import styled from 'react-emotion';

export const ButtonThemeContext = createContext({
	button: '',
	text: '',
});

export type TButtonProps = {
	className?: string;
};

const StyledButton = styled('button')`
	border: none;
`;
const StyledText = styled('span')(textStyle);

export class Button extends PureComponent<TButtonProps> {
	public render() {
		const {children} = this.props;

		return (
			<ButtonThemeContext.Consumer>
				{theme => <StyledButton>
					<StyledText>{children}</StyledText>
				</StyledButton>}
			</ButtonThemeContext.Consumer>
		);
	}
}