import React from 'react'
import PropTypes from 'prop-types'
import Layout from "../components/Layout/Layout"

const clothes = ({ setDim }) => {
    console.log(setDim)
    return (
        <Layout>
            <div>
                clothes section goes here
            </div>
        </Layout>
    )
}

clothes.propTypes = {

}

export default clothes
