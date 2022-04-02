import React from 'react';
import styled from 'styled-components';
//content
import content from '../content.json';
//components
import Section from './Section';

function Home() {
    const sectionElements = content.map((item, index) => {
        return <Section key={index} title={item.title} description={item.description} backgroundImg={item.backgroundImg} leftBtnText={item.leftBtnText} rightBtnText={item.rightBtnText} />
    })
    return (
        <Container>
            {sectionElements}
        </Container>
    )
}

export default Home;

const Container = styled.div`
    height: 100vh;
`;