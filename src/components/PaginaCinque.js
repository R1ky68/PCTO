import React from 'react'
import styled from 'styled-components'

function PaginaCinque() {
  return (
    <Container>
        <h1>Cosa fa nel concreto?</h1>
        <Risposta>Semplice. Tutto.</Risposta>
        <Risposta>Sul Serio, tutto.</Risposta>
        <Risposta style={{ 'marginBottom': '400px' }}>Ma proprio tutto eh.</Risposta>
        <span class="material-symbols-outlined">expand_more</span>
    </Container>
  )
}

export default PaginaCinque

const Container = styled.div`
    background-color: #202020;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 30px;
`

const Risposta = styled.p`
    margin-top: 500px;
    font-family: 'Kdam Thmor Pro', sans-serif;
`