import * as React from 'react';
import {DemoCard} from '../demo-card/demo-card.component';
import {Button} from '../button/button.component';
import {css} from 'emotion';

const mainCss = css({
	margin: 20,
});

class App extends React.Component {
	public render() {
		return (
			<div className={mainCss}>
				<DemoCard title={'main button'}>
					<Button>main button</Button>
				</DemoCard>
			</div>
		);
	}
}

export default App;
