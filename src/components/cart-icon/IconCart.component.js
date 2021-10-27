import React from 'react'
import styled from 'styled-components';
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux'
import { toggleCartHidden  } from '../../redux/cart/cart.actions';

const IconCart = ({ toggleCartHidden }) => {
    return (
        <StyledIconCart onClick={toggleCartHidden} >
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </StyledIconCart>
    )
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const StyledIconCart = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  
    .shopping-icon {
      width: 24px;
      height: 24px;
    }
  
    .item-count {
      position: absolute;
      font-size: 10px;
      font-weight: bold;
      bottom: 12px;
    }

`;

export default connect(null, mapDispatchToProps)(IconCart);
