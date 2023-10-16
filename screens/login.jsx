import React from "react";

import { 
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle
 } from "./../components/style"

const login = () => {
    return(
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/images/BarCode.png')} />
                <PageTitle>Bar Code</PageTitle>
            </InnerContainer>
        </StyledContainer>
    )
}

export default login