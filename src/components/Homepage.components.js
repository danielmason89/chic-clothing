import React from 'react';
import styled from 'styled-components';

const Homepage = () => (
    <HomePage>
        <DirectoryMenu>
            <MenuItem>
                <Content>
                    <Title>Hats</Title>
                    <Subtitle>Shop Now</Subtitle>
                </Content>
            </MenuItem>
            <MenuItem>
                <Content>
                    <Title>Jackets</Title>
                    <span className="subtitle">Shop Now</span>
                </Content>
            </MenuItem>
            <MenuItem>
                <Content>
                    <Title>Shoes</Title>
                    <span className="subtitle">Shop Now</span>
                </Content>
            </MenuItem>
            <MenuItem>
                <Content>
                    <Title>Men's</Title>
                    <span className="subtitle">Shop Now</span>
                </Content>
            </MenuItem>
            <MenuItem>
                <Content>
                    <Title>Women's</Title>
                    <span className="subtitle">Shop Now</span>
                </Content>
            </MenuItem>
        </DirectoryMenu>
    </HomePage>
);


const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
  `

const DirectoryMenu = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space - between;
`

const MenuItem = styled.div`
min-width: 30%;
height: 240px;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
margin: 0 7.5px 15px;
  
    &:first-child {
    margin-right: 7.5px;
} 
    &:last-child {
    margin-left: 7.5px;
}
`
const Content = styled.div`
       height: 90px;
padding: 0 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
`
const Title = styled.div`
       font-weight: bold;
margin-bottom: 6px;
font-size: 22px;
color: #4a4a4a;
`
const Subtitle = styled.span`
 font-weight: lighter;
font-size: 16px;
`

export default Homepage;