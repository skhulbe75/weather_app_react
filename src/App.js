import React, {Fragment} from 'react'

import Weather from './components/Weather'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import "./App.css"

const App = () => {
   
    return(
        <Fragment>
            <Header />
            <Weather />
            <Footer />
        </Fragment>

    );
}

export default App;