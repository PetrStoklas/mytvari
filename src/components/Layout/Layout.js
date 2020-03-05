/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import FlexWrap from './FlexWrap'
import Header from "../header/index"
import '../style.css'
import constants from '../../constants.json'

const Layout = ({ children }) => {
  const [dim, setDim] = useState(false)
  console.log(dim)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const newChildren = children.map((child) => React.cloneElement(child, { setDim: (bool) => setDim(bool) }))
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{ padding: '5px', paddingRight: '0', marginRight: `${constants.bodyToMenu}px` }}>
        <br />
        <FlexWrap direction="column" align="center">
          {newChildren}
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
