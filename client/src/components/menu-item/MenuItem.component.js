import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <Menu
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <Content className="content">
      <Title>{title.toUpperCase()}</Title>
      <Subtitle>Shop Now</Subtitle>
    </Content>
  </Menu>
);

const Menu = styled.div`
  min-width: 30%;
  height: ${({ size }) => (size ? "380px" : "360px")};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 9.5px 15px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    & .background-image {
      transform: scale(1.1);
      transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.7;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }

  .background-image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }

  @media screen and (max-width: 800px) {
    height: 250px;
  }
`;

const Content = styled.div`
  height: 90px;
  padding: 0px 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  position: absolute;
  opacity: 0.9;
`;

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 2px;
  font-size: 15px;
  color: #4a4a4a;
`;

const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 13px;
`;

export default withRouter(MenuItem);
