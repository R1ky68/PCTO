import React from 'react'
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

function PaginaCasa() {
  return (
    <>
    <Spline style={{'height': '900px'}} scene="https://prod.spline.design/ulte31ym11O5cWK0/scene.splinecode" />
    <span style={{'marginLeft': '50%'}} class="material-symbols-outlined">expand_more</span>
    </>
  )
}

export default PaginaCasa;

const Container = styled.div`
    background-color: 
`