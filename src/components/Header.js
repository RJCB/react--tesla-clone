import React, { useState } from 'react'
import styled from 'styled-components'
//icons
import { GrFormClose } from 'react-icons/gr'
function Header() {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const cars = ["Model S", "Model 3", "Model X", "Model Y"];
    const sideMenuLinks = ["Existing Inventory", "Used Inventory", "Trade-in", "Cybertruck", "Roadster", "Powerwall", "Energy", "Charging"];
    return (
        <Container>
            <a href="#" onClick={(e) => { e.preventDefault() }}><img src="/images/logo.svg" alt="logo" /></a>
            <Menu>
                {cars.map((car, index) => {
                    return <a key={index} href="#">{car}</a>
                })}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setSideMenuOpen(true)}>
                    <button>Menu</button>
                </CustomMenu>
            </RightMenu>
            <BurgerNav show={sideMenuOpen}>
                <CloseWrapper>
                    <CustomClose onClick={() => setSideMenuOpen(false)} />
                </CloseWrapper>
                <ul>
                    {sideMenuLinks.map((link, index) => {
                        return <li key={index}><a href="#">{link}</a></li>
                    })}
                </ul>
            </BurgerNav>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    z-index: 10;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    justify-content: space-between;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;

    a {
        padding: 0 10px;
    }

    @media screen and (max-width:768px){
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        margin-right: 10px;
    }
`;

const CustomMenu = styled.div`
    display: flex;
    cursor: pointer;

    button {
        border: none;
        padding: 5px 10px;
        font-size: 16px;
        border-radius: 12px;
        background-color: hsla(0,0%,0%,.05);
        cursor: pointer;
    }
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: var(--white);
    width: 300px;
    z-index: 100;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    li {
        list-style: none;
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0, .2);

        a {

        }
    }
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CustomClose = styled(GrFormClose)`
    cursor: pointer;
    font-size: 32px;
`;