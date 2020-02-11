import React from 'react'
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import Printings from '../components/MainOptions/Printings'
import Clothes from '../components/MainOptions/Clothes'
import About from '../components/MainOptions/About'


const start = () => {
    return (
        <Layout>
            <SEO title="home" />
            <Printings />
            <Clothes />
            <About />
        </Layout>
    )
}

export default start
