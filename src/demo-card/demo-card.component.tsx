import 'reset-css';
import * as React from 'react';
import {CSSProperties, PureComponent} from 'react';
import styled from 'react-emotion';

const Card = styled.article({
	boxShadow: '1px 1px 10px rgba(0, 0, 0, .15)',
	borderRadius: 5,
	overflow: 'hidden',
	'& + &': {
		marginTop: 10,
	},
});

const Header = styled.header({
	padding: '3px 10px',
	backgroundColor: '#f1f1f1',
});

const Title = styled.h1({
	fontSize: 15,
	fontWeight: 'normal',
});

const Body = styled.section({
	padding: '3px 10px 5px 10px',
});

export type TDemoCardProps = {
	title?: string;
	style?: CSSProperties;
};

export class DemoCard extends PureComponent<TDemoCardProps> {
	public render() {
		const {title, children, style} = this.props;

		return (
			<Card>
				<Header>
					<Title>{title}</Title>
				</Header>
				<Body style={style}>{children}</Body>
			</Card>
		);
	}
}
