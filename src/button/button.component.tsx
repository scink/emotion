import * as React from 'react';
import {createContext, PureComponent} from 'react';
import {buttonStyle, textStyle} from './button.style';
import styled, {cx} from 'react-emotion';

export const ButtonThemeContext = createContext({
	button: '',
	text: '',
});

export type TButtonProps = {
	className?: string;
	textCss?: string;
};

const StyledText = styled.span(textStyle);

class RawButton extends PureComponent<TButtonProps> {
	public render() {
		const {children, className, textCss} = this.props;

		return (
			<ButtonThemeContext.Consumer>
				{theme => (
					<button className={cx(buttonStyle, theme.button, className)}>
						<StyledText className={cx(theme.text, textCss)}>{children}</StyledText>
					</button>
				)}
			</ButtonThemeContext.Consumer>
		);
	}
}

export const Button = styled(RawButton)();
