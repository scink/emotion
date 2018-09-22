import 'reset-css';
import * as React from 'react';
import {CSSProperties, PureComponent} from 'react';
import {css} from 'emotion';

const cardStyle = css({
	boxShadow: '1px 1px 10px rgba(0, 0, 0, .15)',
	borderRadius: 5,
	overflow: 'hidden',
	'& + &': {
		marginTop: 10,
	},
});

const headerStyle = css({
	padding: '3px 10px',
	backgroundColor: '#f1f1f1',
});

const titleStyle = css({
	fontSize: 15,
	fontWeight: 'normal',
});

const bodyStyle = css({
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
			<article className={cardStyle}>
				<header className={headerStyle}>
					<h1 className={titleStyle}>{title}</h1>
				</header>
				<section className={bodyStyle} style={style}>
					{children}
				</section>
			</article>
		);
	}
}
