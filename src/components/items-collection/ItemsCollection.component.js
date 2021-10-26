import React from 'react'
import styled from 'styled-components';

const ItemsCollection = ({ id, name, price, imageUrl }) => {
    return (
        <CollectionItem>
            <Image style={{ backgroundImage: `url(${imageUrl})`}} />
                <CollectionFooter>
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </CollectionFooter>
        </CollectionItem>
    )
}

const CollectionItem = styled.div`
    width: 22%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;


`;
const Image = styled.img `
width: 100%;
      height: 95%;
      background-size: cover;
      background-position: center;
      margin-bottom: 5px;

`;
const CollectionFooter = styled.div `
width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;

      .name {
        width: 90%;
        margin-bottom: 15px;
      }

      .price {
        width: 10%;
      }


`;

export default ItemsCollection;
