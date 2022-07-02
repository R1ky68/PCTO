import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
        <p>Fatto con ❤️ da Riccardo Racos utilizzando i seguenti linguaggi:</p>
        <LinguaggiUsati>
            <p><u>HTML</u> - struttura</p>
            <p><u>CSS</u> - stile</p>
            <p><u>JavaScript</u> - funzionalità</p>
            <p><u>React JS</u> - framework</p>
            <p><u>Spline</u> - 3D Software</p>
        </LinguaggiUsati>
        <CopyrightContainer>
            <Divider />
            <Copyright>©Copyright. tutti i diritti riservati.</Copyright>
        </CopyrightContainer>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    color: white;
    background-color: black;
    padding: 40px;

    p {
        font-family: 'Roboto', sans-serif;
    }
`

const LinguaggiUsati = styled.div`
    padding: 10px 20px;
    line-height: 1.8;
`

const CopyrightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Divider = styled.div`
    height: 1px;
    background-color: white;
    width: 500px;
`

const Copyright = styled.p`
    margin: 20px;
    text-align: center;
`