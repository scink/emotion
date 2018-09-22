import * as React from 'react';
import {DemoCard} from '../demo-card/demo-card.component';
import {Button, ButtonThemeContext} from '../button/button.component';
import {css} from 'emotion';
import * as buttonCss from '../button/button.css';
import {Form} from '../form/form.component';
import {Input} from '../input/input.component';
import {DeepCascade} from '../deep-cascade/deep-cascade.component';
import {DeeperCascade} from '../deeper-cascade/deeper-cascade.component';

const mainCss = css({
	margin: 20,
});

const color = 'yellow';

const textContext = css({
	color,
	fontSize: 16,
});

const textCss = css({
	color: 'forestGreen',
	fontWeight: 'bold',
	background: 'none',
});

const someMoreStyles = css({
	padding: 10,
	fontSize: 10,
	color: 'pink',
});

class App extends React.Component {
	public render() {
		return (
			<div className={mainCss}>
				<DemoCard title={'only base style'}>
					<Button>Click Me</Button>
				</DemoCard>
				<DemoCard title={'context styles'}>
					<ButtonThemeContext.Provider
						value={{
							button: '',
							text: textContext,
						}}>
						<Button>Click Me</Button>
					</ButtonThemeContext.Provider>
				</DemoCard>
				<DemoCard title={'parent styles'}>
					<Button textCss={textCss}>Click Me</Button>
				</DemoCard>
				<DemoCard title={'context and parent'}>
					<ButtonThemeContext.Provider
						value={{
							button: '',
							text: textContext,
						}}>
						<Button textCss={textCss}>Click Me</Button>
					</ButtonThemeContext.Provider>
				</DemoCard>
				<DemoCard title={'css module parent'}>
					<Button textCss={buttonCss.buttonModule}>Click Me</Button>
				</DemoCard>
				<DemoCard title={'cascade'}>
					<Form />
				</DemoCard>
				<DemoCard>
					<div className={someMoreStyles}>something more</div>
				</DemoCard>
				<DemoCard>
					<Input />
				</DemoCard>
				<DemoCard title={'deep cascade'}>
					<DeepCascade />
				</DemoCard>
				<DemoCard title={'double cascade'}>
					<DeeperCascade />
				</DemoCard>
			</div>
		);
	}
}

export default App;
