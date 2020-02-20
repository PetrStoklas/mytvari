import React, { useState } from 'react'
import MenuContent from './MenuContent'
import MenuButton from './MenuButton'


export default () => {
    const [ open, setOpen ] = useState(false)
 
    return (
        <div>
            <MenuContent open={open} />
            <MenuButton onClick={() => setOpen(!open)} open={open} />
        </div>
)}