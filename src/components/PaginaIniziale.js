import React from 'react'
import styled from 'styled-components'
import Spline from '@splinetool/react-spline';

function PaginaIniziale() {
  return (
    <>
        <Container>
            <TitoloIniziale>La casa dei tuoi sogni, ora domotica.</TitoloIniziale>
            <Spline scene="https://prod.spline.design/yTmTtzLgx5LcZTbv/scene.splinecode" />
        </Container>
        <span style={{'marginLeft': '50%'}} class="material-symbols-outlined">expand_more</span>
    </>
    )
}

export default PaginaIniziale

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 820px;
`

const TitoloIniziale = styled.h1`
    text-align: center;
    position: absolute;
`