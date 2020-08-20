import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Buttons from './Buttons'
import './pageDefault.css'

function PageDefault({children}) {

    return (

        <>
            <Header/>
            <Buttons/>
                {children}
            <Footer/>
        </>
    )
}

export default PageDefault