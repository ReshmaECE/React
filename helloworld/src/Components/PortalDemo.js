import React from 'react'
import  ReactDOM  from 'react-dom'


function PortalDemo() {
    return  ReactDOM.createPortal(
        
        <h1>Portal Demo </h1>,
        //  <p>checking that is working or not</p>,
        document.getElementById("Portal-root")
    
    )
}

export default PortalDemo

// in public (index html) we declare that <div id="portal-root"/> and the we create a file named it
        // has portal-root now inspect the console see different it comes under the root not in the poral-root div 
