import React, {Component} from "react";
import {withStyles} from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

class MiniPalette extends Component {

    constructor(props) {
        super(props);
        this.deletePalette = this.deletePalette.bind(this);
    }

    deletePalette(e) {
        e.stopPropagation();
        this.props.deletePalette();
    }

    render() {
        const {classes, paletteName, emoji, colors, handleClick} = this.props;
        return(
            <div className={classes.root} onClick={handleClick}>
                <div className={classes.deleteIconContainer}>
                <DeleteIcon className={classes.deleteIcon} onClick={this.deletePalette}/>
                </div>
                <div className={classes.colors}>
                    {colors.map(color => {
                        return <div className={classes.color} style={{background: color.color}} key={color.name}></div>
                    })}
                </div>
                <h5 className={classes.title}>{paletteName} 
                <span className={classes.emoji}>{emoji}</span>
                </h5>
            </div>
        )
    }
}

export default withStyles(styles)(MiniPalette);