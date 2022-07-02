import React, { useState } from 'react'
import styled from 'styled-components'
import { Typewriter } from 'react-simple-typewriter'

function Team() {

    const [visibile, setVisibilità] = useState(false)

    const handleClick = event => {
        setVisibilità(!visibile);
      };

  return (
    <Container>
        <h1 style={{ 'textAlign': 'center' }}>Il Team?</h1>
        <DettagliTeam>
            <ListaTeam>
                <h2>🇷🇴 Riccardo Ionut Racos</h2>
                <h2>🇮🇹 Luca Aguzzi</h2>
                <h2>🇮🇹 Samuele Fiocco</h2>
                <h2>🇮🇹 Niccolò Perazzoli</h2>
                <h2>🇮🇹 Nicolò Lattanzi</h2>
                <h2>🇮🇹 Leonardo Donati</h2>
            </ListaTeam>
            <Divider />
            <ContainerRecensione>
                <ButtonRecensione onClick={handleClick}>Vedi Recensione</ButtonRecensione>
                {visibile && (
                    <Typewriter 
                        loop={20}
                        typeSpeed={30}
                        words={["”I.I.S. C. Rosatelli, 5EA, Sei ragazzi volenterosi e pieni di energia da dedicare agli altri. Un esempio per le nuove generazioni.” -Forbes, 2022"]}
                    />
                )}
            </ContainerRecensione>
        </DettagliTeam>



    </Container>
  )
}

export default Team

const Container = styled.div`
    background-color: #202020;
    color: white;
    padding: 100px 30px;
`

const DettagliTeam = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 50px;
`;

const ListaTeam = styled.div`
    h2 {
        line-height: 2.5;
    }
`
const Divider = styled.div`
    width: 1px;
    height: 500px;
    background-color: white;
`;

const ContainerRecensione = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ButtonRecensione = styled.button`
    position: absolute;
    margin: -100px auto 80px 10%;
    width: 150px;
    heifht: 20px;
    padding: 10px;
    border-radius: 6px;
    border: none;
`