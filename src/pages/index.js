import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

import Main from '../components/Main/Main'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main />
  </Layout>
)

export default IndexPage
