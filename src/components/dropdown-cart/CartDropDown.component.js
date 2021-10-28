import React from 'react'
import { connect } from 'react-redux';
import CustomButton from '../button-custom/CustomButton.component';
import ItemCart from '../cart-item/ItemCart.component';
import { selectCartItems} from '../../redux/cart/cart.selectors';
import styled from 'styled-components';

const CartDropDown = ({ cartItems }) => {
    return (
        <StyledCartDropDown>
        <StyledCartItem>
        {
          cartItems.map(cartItem => ( <ItemCart key={cartItem.id} item={cartItem} /> )
          )}
        </StyledCartItem>
        <CustomButton>CheckOut Here</CustomButton>
        </StyledCartDropDown>
    )
}
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

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
`;

const StyledCartItem = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    margin-bottom: auto;
`;

export default connect(mapStateToProps)(CartDropDown);
