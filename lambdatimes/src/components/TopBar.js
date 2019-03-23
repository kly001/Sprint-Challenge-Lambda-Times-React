import React from 'react';
import styled from "styled-components"

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const StyledTopBar = styled.div `
width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const StyledTopBarContainer = styled.div`
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
`;

const StyledContainerLeft = styled.div`
display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const LeftSpan = styled.div `
cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;
const StyledContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const CenterSpan = styled.div `
cursor: pointer;
  margin-right: 5%;
`;

const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledTopBarContainer>
        <StyledContainerLeft>
          <LeftSpan>TOPICS</LeftSpan>
          <LeftSpan>SEARCH</LeftSpan>
        </StyledContainerLeft>
        <StyledContainerCenter>
          <CenterSpan>GENERAL</CenterSpan>
          <CenterSpan>BROWNBAG</CenterSpan>
          <CenterSpan>RANDOM</CenterSpan>
          <CenterSpan>MUSIC</CenterSpan>
          <CenterSpan>ANNOUNCEMENTS</CenterSpan>
        </StyledContainerCenter>
        <div className="container-right">
          <span>LOG IN</span>
        </div>
      </StyledTopBarContainer>
    </StyledTopBar>
  )
}

export default TopBar;