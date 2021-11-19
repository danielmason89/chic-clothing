import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import styled from "styled-components";
import IconCart from "../cart-icon/IconCart.component";
import CartDropDown from "../dropdown-cart/CartDropDown.component";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <StyledHeader>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/shop">Contact</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to="/sign-in">Sign In</OptionLink>
        )}
        <IconCart />
      </OptionContainer>
      {hidden ? null : <CartDropDown />}
    </StyledHeader>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const StyledHeader = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
  }
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 40px;
    padding: 0;
    display: flex;
  }
`;

const OptionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    padding: 0.725rem;
  }
`;

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
