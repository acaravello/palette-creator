import React, {Component} from "react";
import "./SingleColorPalette.css";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/styles";
import styles from "./styles/SingleColorPaletteStyles";

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex"
        }
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.gatherShades = this.gatherShades.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    gatherShades(palette, colorToFilterBy) {
        let shades = [];
        let allColors = palette.colors;
        for(let key in allColors) {
            shades = shades.concat(allColors[key].filter(color => color.id === colorToFilterBy));
        }
        return shades.slice(1);
    }

    changeFormat(newFormat) {
        this.setState({format: newFormat});
    }

    render() {
        const {palette, classes} = this.props;
        const {format} = this.state;
        return(
            <div className="SingleColorPalette">
                <Navbar level={500} onHandleChange={this.changeFormat} showSlider={false}/>
                <div className="Palette-Colors">
                    {this._shades.map(color => {
                        return <ColorBox key={color.name} name={color.name} background={color[format]} 
                        colorId={color.id} paletteId={palette.id} showFullPalette={false} />
                    })}
                    <div className={classes.colorBox}>
                        <Link to={`/palette/${palette.id}`} className={classes.backButton}>Go Back</Link>
                    </div>
                </div>
                <PaletteFooter name={palette.name} emoji={palette.emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette);
