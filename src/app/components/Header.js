import React from 'react';
import { Avatar } from '@material-ui/core';
import styled from 'styled-components';
import { AccessTime, HelpOutline, Search } from '@material-ui/icons';

function Header() {
	return (
		<HeaderContainer>
			{/* Header Left */}
			<HeaderLeft>
				<HeaderAvatar />
				<AccessTime />
			</HeaderLeft>

			{/* Header Middle */}
			<HeaderSearch>
				<Search />
				<input placeholder='Seach' />
			</HeaderSearch>

      <HeaderRight>
        <HelpOutline/>
      </HeaderRight>

			{/* Header Right */}
		</HeaderContainer>
	);
}

export default Header;

const HeaderSearch = styled.div`
	flex: 0.4;
	opacity: 1;
	border-radius: 6px;
	border-color: #421f44;
	text-align: center;
	display: flex;
	padding: 0 50px;
  color: gray;
	border: 1px gray solid;

	> input {
		background-color: transparent;
		border: none;
		text-align: center;
		min-width: 30vw;
		color: white;
	}
`;

const HeaderContainer = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	background-color: var(--slack-color);
	color: white;
`;

const HeaderLeft = styled.div`
	flex: 0.3;
	display: flex;
	align-items: center;
	margin-left: 20px;
	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 30px;
	}
`;
;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderAvatar = styled(Avatar)`
	cursor: pointer;
	:hover {
		opacity: 0.8;
	}
`;
