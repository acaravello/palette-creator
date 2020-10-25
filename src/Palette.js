import React, {Component} from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import {withStyles} from "@material-ui/styles";
import styles from "./styles/PaletteStyles.js";


class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: "hex"
        }
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(newLevel) {
        this.setState({
            level: newLevel
        });
    }

    changeFormat(newFormat) {
        this.setState({format: newFormat});
    }

    render() {

        const {colors, emoji, name, id} = this.props.palette;
        const {level, format} = this.state;
        const {classes} = this.props;

        return(
            <div className={classes.palette}>
                <Navbar changing={this.changeLevel} level={level} onHandleChange={this.changeFormat} showSlider={true} />
                <div className={classes.paletteColors}>
                {colors[level].map(color => {
                    return <ColorBox key={color.name} name={color.name} background={color[format]} 
                    colorId={color.id} paletteId={id} showFullPalette={true}/>
                })}
                </div>
                <PaletteFooter name={name} emoji={emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(Palette);