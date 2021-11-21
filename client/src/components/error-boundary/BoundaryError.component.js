import React from "react";
import styled from "styled-components";

class BoundaryError extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/lKJiT77.png" />
          <ErrorImageText>
            <h1>A Dog Ate this Page</h1>
            <p>
              Your dog is cute but honestly a menace. Where are my shoes? Where
              is my graduation certificate? Where is the chocolate cake I baked
              for my Aunt’s birthday? And why did you take your dog to the vet
              on that same Thursday?!
            </p>
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`;

export default BoundaryError;
