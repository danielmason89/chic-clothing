import React from "react";
import styled from "styled-components";
import CustomButton from "../button-custom/CustomButton.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const ItemsCollection = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItem>
      <Image style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooter>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </CollectionFooter>
      <CustomButton2
        onClick={() => addItem(item)}
        className="custom-button"
        inverted
      >
        Add to cart
      </CustomButton2>
    </CollectionItem>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

const CollectionItem = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }

      .custom-button {
        opacity: unset;
        display: flex;
      }
    }
  }
`;
const Image = styled.img`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;
const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .name {
    width: 70%;
    margin-bottom: 15px;
  }

  .price {
    width: auto;
  }

  @media screen and (max-width: 1150px) {
    font-size: 11px;
    font-weight: bold;
    padding: 0.225rem;

    .name {
      width: 100%;
      margin-bottom: 15px;
    }

    .price {
      width: auto;
    }
  }
`;

const CustomButton2 = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.8;
    min-width: unset;
    padding: 0 1px;
  }
`;

export default connect(null, mapDispatchToProps)(ItemsCollection);
