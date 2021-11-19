import React from "react";
import styled from "styled-components";
import Directory from "../../components/directory/Directory.component";

const Homepage = () => (
  <HomePage>
    <Directory />
  </HomePage>
);

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;

export default Homepage;
