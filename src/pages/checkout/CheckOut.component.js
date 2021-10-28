import React from 'react';
import styled from 'styled-components';
import ItemCheckOut from '../../components/item-checkout/ItemCheckOut.component';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const CheckOut = ({ cartItems, total }) => {
    return (

        <StyledCheckOutPage>
        <HeaderCheckOut>
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </HeaderCheckOut>
        {
            cartItems.map(cartItem =>
            (
                <ItemCheckOut key={cartItem.id} cartItem={cartItem} />
            ))}
        <div className="total">
            <span>Total: ${total}</span>
        </div>
    </StyledCheckOutPage>
    )};

const StyledCheckOutPage = styled.div `

        width: 55%;
        min-height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px auto 0;
      
        .total {
          margin-top: 30px;
          margin-left: auto;
          font-size: 36px;
        }
`;

const HeaderCheckOut = styled.div `

          width: 100%;
          padding: 10px 0;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid darkgrey;
      
          .header-block {
            text-transform: capitalize;
            width: 23%;
      
            &:last-child {
              width: 8%;
            }
          }
`;

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});
    
      

export default connect(mapStateToProps)(CheckOut);
