import React from 'react'
import styled from 'styled-components'
//react reveal - Fade
import Fade from 'react-reveal/Fade'
function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
    return (
        <Container bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Fade bottom>
                <ButtonGroup>
                    <Buttons>
                        {leftBtnText &&
                            <LeftButton>
                                {leftBtnText}
                            </LeftButton>
                        }
                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </Buttons>
                    <DownArrow src={`${process.env.PUBLIC_URL}/images/down-arrow.svg`} />
                </ButtonGroup>
            </Fade>
        </Container>
    )
}

export default Section;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${(props) => `url("${process.env.PUBLIC_URL}/images/${props.bgImage}")`};//Container is a separate styled component, so prop must be pass into the Container as well
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

    h1 {
        font-weight: 400;
    }

    p {
        padding: 6px 24px 16px;
        font-weight: 300;
    }
`;

const Buttons = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media screen and (max-width:768px){
        flex-direction: column;
    }
`;

const LeftButton = styled.button`
    background-color: #171A20CC;
    height: 40px;
    width: 256px;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: none;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`;
//reference leftButton css/inherit
const RightButton = styled(LeftButton)`
    background-color: #F4F4F4A6;
    color: #393c41;
`;

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateArrow infinite 1.5s;

    @keyframes animateArrow {
        0%,20%,50%,80%,100% {
            transform:translateY(0);
        }

        40% {
            transform: translateY(5px);
        }

        60% {
            transform: translateY(3px);
        }
    }
`
const ButtonGroup = styled.div``;
