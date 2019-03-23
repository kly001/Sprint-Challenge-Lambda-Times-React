import React from 'react';
import styled from "styled-components"




// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const WrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;


`;
const StyledDate = styled.div `
margin-left: 25px;
  flex: 1;
`;

const StyledH1 = styled.div`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const StyledTemp = styled.div `
  text-align: right;
  margin-right: 25px;
  flex: 1;
`



const Header = () => {
  return (
   
    <WrapperDiv>
      <StyledDate>MARCH 22, 2019</StyledDate>
      <StyledH1>Lambda Times</StyledH1>
      <StyledTemp>98°</StyledTemp>
    </WrapperDiv>
    
    
  )
}

export default Header