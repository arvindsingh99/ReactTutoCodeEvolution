import React from 'react'

function FragmentColumn() {
    return (
        <React.Fragment>
            <td>Arvind</td>
            <td>Mohan</td>
        </React.Fragment>
        // We can use this also but in this method we cannot use key attribute
        //     <>
        //     <td>Arvind</td>
        //     <td>Mohan</td>
        // </>


    )
}

export default FragmentColumn
