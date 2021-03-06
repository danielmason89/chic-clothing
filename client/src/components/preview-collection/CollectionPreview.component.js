import React from "react";
import styled from "styled-components";
import ItemsCollection from "../items-collection/ItemsCollection.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <StyledCollectionPreview>
      <StyledTitle>{title.toUpperCase()}</StyledTitle>
      <StyledPreview>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <ItemsCollection key={item.id} item={item} />
          ))}
      </StyledPreview>
    </StyledCollectionPreview>
  );
};

const StyledCollectionPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .preview {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

const StyledTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

const StyledPreview = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;

export default CollectionPreview;
