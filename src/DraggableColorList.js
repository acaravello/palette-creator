import React from "react";
import {SortableContainer} from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox"

function DraggableColorList({colors, deleteColor}) {
    return (
        <div style={{height: `calc(100% - 64px)`}}>
            {colors.map((singleColor, index) => <DraggableColorBox color={singleColor.color} key={singleColor.color} 
            name={singleColor.name} index={index}
            deleteColor={() => {deleteColor(singleColor.name)}}/>)}
        </div>
    )
}

export default SortableContainer(DraggableColorList);