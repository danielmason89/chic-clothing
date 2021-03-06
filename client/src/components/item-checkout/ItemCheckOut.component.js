import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem  } from '../../redux/cart/cart.actions';

const ItemCheckOut = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <StyledCheckOutItem>
            <div className="container-image">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
            <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </StyledCheckOutItem>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})


const StyledCheckOutItem = styled.div `

    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    .container-image{

        width: 23%;
      padding-right: 15px;
  
      img {
        width: 100%;
        height: 100%;
      }
    }
  
    
    .name,
    .quantity,
    .price {
      width: 23%;
    }
  
    .quantity {
      display: flex;
      
      .arrow{
          cursor: pointer;
      }

      .value{
          margin: 0 10px;
      }
    }
  
    .remove-button {
      padding-left: 12px;
      cursor: pointer;
    }
`;

export default connect(null, mapDispatchToProps)(ItemCheckOut);