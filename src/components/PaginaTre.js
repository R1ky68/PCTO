import React from 'react'
import styled from 'styled-components'


function PaginaTre() {
  return (
    <>
        <Container>
            <TitoloIniziale>Con lui è assolutamente possibile.</TitoloIniziale>
            <Image src='https://cdn.pixabay.com/photo/2017/03/23/12/32/arduino-2168193__480.png'></Image>
        </Container>
        <span style={{'marginLeft': '50%'}} class="material-symbols-outlined">expand_more</span>
    </>
  )
}

export default PaginaTre

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 820px;
`

const TitoloIniziale = styled.h1`
    font-family: 'Inter', sans-serif;
    text-align: center;
    margin-bottom: 100px;
`

const Image = styled.img`
  width: 30%;
`
