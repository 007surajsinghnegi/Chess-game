import React from 'react'

function Square({children ,black}) {

    const bgClass = black? 'square_black' : 'square_white'
    
    return (
        <div className={`${bgClass} board_square`}>
            {children}
        </div>
    )
}

export default Square
