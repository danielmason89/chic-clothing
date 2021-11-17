import React from 'react'
import { StyledButton } from '../../components/button-custom/CustomButton.styles';

const CustomButton = ({ children, ...props}) => {
    return (
        <StyledButton {...props}>{children}</StyledButton>
    )
}

export default CustomButton;