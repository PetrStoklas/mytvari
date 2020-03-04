/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import FlexWrap from './FlexWrap'
import Header from "../header/index"
import '../style.css'
import constants from '../../constants.json'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{ padding: '5px', paddingRight: '0', marginRight: `${constants.bodyToMenu}px` }}>
        <br />
        <FlexWrap direction="column" align="center">
          {children}
        </FlexWrap>
        <br />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// <footer style={{ position: 'absolute', bottom: 0 }}>
//           © Mytvari - {new Date().getFullYear()}
//           </footer>
