import React from 'react'
import PropTypes from 'prop-types'
import Wrap from './wrap'
import Scrollbar from './Scrollbar'

const index = props => {
    return (
        <Wrap>
    <div>mytvari</div>
    <Scrollbar />
    <div>menu</div>
  </Wrap>
    )
}

index.propTypes = {

}

export default index
