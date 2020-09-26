import React from 'react'
import Section from '../../Section'
import { homeObjOne, homeObjTwo } from './Data'

function Home() {
    return (
        <>
          <Section {...homeObjOne} />  
          <Section {...homeObjTwo} />  
        </>
    )
}

export default Home
