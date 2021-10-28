import React from 'react'
import styled from 'styled-components';
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux'
import { toggleCartHidden  } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const IconCart = ({ toggleCartHidden, itemCount }) => {
    return (
        <StyledIconCart onClick={toggleCartHidden} >
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{ itemCount }</span>
        </StyledIconCart>
    )
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

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

export default connect(mapStateToProps, mapDispatchToProps)(IconCart);
