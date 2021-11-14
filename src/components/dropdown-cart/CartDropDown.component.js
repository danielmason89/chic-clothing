import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../button-custom/CustomButton.component";
import ItemCart from "../cart-item/ItemCart.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <StyledCartDropDown>
      <StyledCartItem>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <ItemCart key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
      </StyledCartItem>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        CheckOut Here
      </CustomButton>
    </StyledCartDropDown>
  );
};

const StyledCartDropDown = styled.div`
  position: absolute;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }
`;

const StyledCartItem = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-bottom: auto;
`;

export default CartDropDown;
