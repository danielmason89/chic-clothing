import React from 'react';
import styled from 'styled-components';
import DirectoryMenu from '../../components/directory/Directory.component';

const Homepage = ({ MenuItem, Content, Title, Subtitle }) => (
    <HomePage>
        <DirectoryMenu>
        </DirectoryMenu>
    </HomePage>
);

const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
  `

export default Homepage;