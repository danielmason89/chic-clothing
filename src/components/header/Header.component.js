import React from 'react'
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import styled from 'styled-components';
import IconCart from '../cart-icon/IconCart.component';
import CartDropDown from '../dropdown-cart/CartDropDown.component';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser, hidden }) => {
    return (
        <StyledHeader>
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                Shop
            </Link>
            <Link className="option" to='/shop'>
                Contact
            </Link>
            { currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
             ) : (
                <Link className="option" to='/sign-in'>Sign In</Link>
             )}
             <IconCart/>
        </div>
        {hidden ? null : <CartDropDown/>}
        </StyledHeader>
    )};

const mapStateToProps = ({user: { currentUser}, cart: { hidden } }) => ({
    currentUser,
    hidden
});


const StyledHeader = styled.div `
height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    .logo-container {
      height: 100%;
      width: 70px;
      padding: 25px;
    }

    .options {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
  
      .option {
        padding: 10px 15px;
        cursor: pointer;
      }
    }
`;




export default connect(mapStateToProps)(Header);
