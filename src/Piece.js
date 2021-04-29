import React from 'react'
import {useDrag, DragPreviewImage} from 'react-dnd';


function Piece({ piece , position }) {
    const type= piece.type;
    const color = piece.color;
    const pieceImg = require(`./assets/${type}_${color}.png`).default

    const [ {isDragging}, drag , preview] = useDrag({
        type: 'piece',
        item:{ id: `${position}_${type}_${color}`},
        collect:(monitor) =>{
            return {isDragging: !!monitor.isDragging()}
        } 
    })

    // console.log(JSON.stringify(pieceImg))
    return (
        <>
            <DragPreviewImage connect={preview} src={pieceImg}/>
            <div className="piece_container" ref={drag} style={{opacity : isDragging ? 0:1}}>
                <img src={pieceImg} />
            </div>
        </>
        
    )
}

export default Piece;
