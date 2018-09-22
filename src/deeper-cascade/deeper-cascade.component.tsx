import * as React from 'react';
import {PureComponent} from 'react';
import {Button} from '../button/button.component';
import styled from 'react-emotion';
import {DeepCascade} from '../deep-cascade/deep-cascade.component';

const StyledDiv = styled.div`
	& > ${Button} {
		background-color: blue;
	}
`;

export class DeeperCascade extends PureComponent {
	public render() {
		return (
			<StyledDiv>
				<Button>top level</Button>
				<DeepCascade />
			</StyledDiv>
		);
	}
}
