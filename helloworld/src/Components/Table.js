import React from 'react'
import Column from './Column'


function Table() {
    return (
        <table>
            <tbody>
                <tr>
                 <Column />  {/* now they is in <div></div> inbetween in inspectconsole for that reason using React.Fragment 
                  now remove <div> tag in column replace React.Fragment tag*/}
                
                </tr>
            </tbody>
        </table>
    )
}

export default Table
