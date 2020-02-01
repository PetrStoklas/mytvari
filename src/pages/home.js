import React from 'react'
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import Main from '../components/Main/Main'


const home = () => {
    return (
        <Layout>
            <SEO title="home" />
            <Main />
        </Layout>
    )
}

export default home
