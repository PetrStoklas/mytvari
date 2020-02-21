import React, { useState } from 'react'
import MenuContent from './MenuContent'
import MenuButton from './MenuButton'

export default () => {
    const [ open, setOpen ] = useState(false)
 
    return (
        <div>
        <MenuButton onClick={() => setOpen(!open)} open={open} />
        <MenuContent open={open} />
        </div>
        )}