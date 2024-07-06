import React from 'react'
import Main from "../components/Main"
import Row from '../components/Row'
import requests from '../RequestAPI'
export default function Home() {
  return (
    <>
    <Main /> 
    <Row rowID='1' title='Up Coming' fetchURL={requests.requestUpcoming} /> 
    <Row rowID='2' title='Popular Today' fetchURL={requests.requestPopular} /> 
    <Row rowID='3' title='Top Rated by Our People' fetchURL={requests.requestTopRated} /> 
    <Row rowID='4' title='Horror' fetchURL={requests.requestHorror} /> 
    </>
  )
}
