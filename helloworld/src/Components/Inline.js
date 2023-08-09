import React from "react";

const heading={
    color:"blue",
    fontsize:'72px',
}



function Inline(){
    return(
        <div>
            <h1 className='error'>Error</h1> {/* // appStyles.css  work in the child componets */}
                                               
             <h1 className={styles.success}>success</h1>  {/* // but appStyle.module will not work it cannot apply to the child components   */}
        
            <h1 style={heading} >Inline CSS</h1>
        </div>
    )
}










export default Inline
