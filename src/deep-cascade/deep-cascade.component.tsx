import * as React from 'react';
import {PureComponent} from 'react';
import styled from 'react-emotion';
import {Button} from '../button/button.component';

const StyledA = styled.div`
	${Button} {
		background-color: green;
	}
`;
const StyledB = styled.div``;

export class DeepCascade extends PureComponent {
	public render() {
		return (
			<StyledA>
				<Button>level 1</Button>
				<StyledB>
					<Button>level 2</Button>
				</StyledB>
			</StyledA>
		);
	}
}
