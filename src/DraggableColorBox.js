import React, { Component } from "react";
import {withStyles} from "@material-ui/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import {SortableElement} from "react-sortable-hoc";
import styles from "./styles/DraggableColorBoxStyles";



class DraggableColorBox extends Component {
        render() {
            const {classes, color, name, deleteColor} = this.props;
        return (
            <div className={classes.root} style={{backgroundColor: color}}>
                <div className={classes.boxContent}>
                    <span>{name}</span>
                    <DeleteIcon className={classes.deleteIcon} onClick={deleteColor}/>
                </div>
        </div>
        )
    }
}


export default SortableElement(withStyles(styles)(DraggableColorBox));
