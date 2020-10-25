import React, {Component} from "react";
import "./ColorBox.css";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/styles";
import styles from "./styles/ColorBoxStyles";


class ColorBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            copied: false
        }
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState() {
        this.setState({copied: true}, () => {
            setTimeout(() => {this.setState({copied: false})}, 1500)
        })
    }

    render() {
        const {background, name, colorId, paletteId, showFullPalette, classes} = this.props;

        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{background: background}} className={classes.colorBox}>
                    <div style={{background: background}} className={`Copy-Overlay ${this.state.copied ? 'Show' : ''}`}></div>
                    <div className={`Copy-Msg ${this.state.copied ? 'Show' : ''}`}>
                        <h1>Copied!</h1>
                        <p className={classes.copyText}>{this.props.background}</p>
                    </div>
                <div className="Copy-Container">
                    <div className="Box-Content">
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={classes.copyButton}>Copy</button>
                    
                </div>
                {showFullPalette && <Link to={`/palette/${paletteId}/${colorId}`} onClick={(event) => {event.stopPropagation()}}>
                <span className={classes.seeMore}>More</span>
                </Link>
                }
                
                
            </div>
            </CopyToClipboard>
            
        )
    }
}

export default withStyles(styles)(ColorBox);