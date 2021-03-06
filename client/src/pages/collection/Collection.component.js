import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import ItemsCollection from "../../components/items-collection/ItemsCollection.component";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;

  return (
    <StyledCollectionPage>
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <ItemsCollection key={item.id} item={item} />
        ))}
      </div>
    </StyledCollectionPage>
  );
};

const StyledCollectionPage = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 28px;
    margin: 0 auto 30px;
    text-align: center;
    text-transform: uppercase;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & .collection-item {
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 800px) {
    .items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
      place-self: center stretch;

      & .collection-item {
        margin-bottom: 10px;
      }
    }
  }
`;

export default CollectionPage;
