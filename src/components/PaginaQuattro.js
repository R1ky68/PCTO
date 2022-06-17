import React from 'react'
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

function PaginaQuattro() {
  return (
    <>
        <ContainerArduino>
            <Spline scene="https://prod.spline.design/ujEIuw0bnOFTeOGv/scene.splinecode" style={{ 'width': '730px', 'height': '730px' }} />
            <Divider />
            <DescrizioneArduino>
                <h1>Arduino Uno</h1>
                <p style={{'marginTop': '50px', 'letterSpacing': '2px', 'line-height': '1.6'}} >​Arduino è una scheda open-source cioè con licenza libera, utilizzata per costruire progetti di robotica, elettronica e automazione.
    Arduino è una scheda programmabile con microcontrollore e compresa di una parte software, o IDE, che eseguita su un computer, viene usata per scrivere e caricare codice informatico (in linguaggio “C”) nella scheda stessa. 
    ​Il progetto Arduino è stato creato per permettere ad artisti creativi, designer e progettisti di prototipare e proggettare le loro idee senza dover disporre di molte conoscenze tecniche.
    Alla base di Arduino c`è l`idea di rendere la creazione di progetti elettronici più veloce ed agevole ma sopratutto facile e alla portata di tutti.</p>
            </DescrizioneArduino>
        </ContainerArduino>
        <span style={{'marginLeft': '50%'}} class="material-symbols-outlined">expand_more</span>
    </>
  )
}

export default PaginaQuattro;

const ContainerArduino = styled.div`
    display: flex;
    align-items: center;
`;

const Divider = styled.div`
    width: 1px;
    height: 500px;
    background-color: black;
`;

const DescrizioneArduino = styled.div`
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
`