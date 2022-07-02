import React from 'react'
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

function DescrizioneArduino() {
  return (
    <>
        <ContainerArduino>
            <Spline scene="https://prod.spline.design/ujEIuw0bnOFTeOGv/scene.splinecode" style={{ 'width': '730px', 'height': '730px' }} />
            <Divider />
            <DettagliArduino>
                <h1>Arduino Uno</h1>
                <p style={{'marginTop': '50px', 'letterSpacing': '2px', 'line-height': '1.6'}} >​Arduino è una scheda open-source, cioè con licenza libera, utilizzata per costruire progetti di robotica, elettronica e automazione.
    È una scheda programmabile con microcontrollore e compresa di una parte software, che eseguita su un computer, viene usata per scrivere e caricare codice con il linguaggio “C” nella scheda stessa. L'utilizzo di questa scheda nel progetto è essenziale al fine di rendere la casa effettivamente domotica. Alcuni esempi di utilizzo sono: gestione luci interne ed esterne; codice di accesso all'abitazione; accensione fornelli con controllo temperatura tramite trasduttori per questioni di sicurezza; ecc.</p>
            </DettagliArduino>
        </ContainerArduino>
        <span style={{'marginLeft': '50%'}} class="material-symbols-outlined">expand_more</span>
    </>
  )
}

export default DescrizioneArduino;

const ContainerArduino = styled.div`
    display: flex;
    align-items: center;
`;

const Divider = styled.div`
    width: 1px;
    height: 500px;
    background-color: black;
`;

const DettagliArduino = styled.div`
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
`