import React from 'react'
import styled from 'styled-components'

function FunzioniDivertenti() {
  return (
    <Container>
        <h1>Cosa fa nel concreto?</h1>
        <Risposta>Semplice. Tutto.</Risposta>
        <Risposta>Sul Serio, tutto.</Risposta>
        <Risposta>Ma proprio tutto eh.</Risposta>
        <Risposta>O almeno in questo progetto fa un sacco di cose fighe</Risposta>
        <Risposta>"Arduino, accendi le luci!"; "Arduino, accendi i fornelli!"; "Arduino, raccontami una barzelletta!"</Risposta>
        <Risposta>Ok forse non fa tutto tutto</Risposta>
        <Risposta style={{ 'marginBottom': '400px' }}>Invece si, scherzavo.</Risposta>
        <span class="material-symbols-outlined">expand_more</span>
    </Container>
  )
}

export default FunzioniDivertenti

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