import React, {Component} from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            format: "hex",
            open: false
        }
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleFormatChange(event) {
        this.setState({format: event.target.value, open: true}, 
            () => {this.props.onHandleChange(this.state.format);});
    }

    closeSnackbar() {
        this.setState({open: false});
    }


    render() {
        const {level, changing, showSlider} = this.props;
        const {format} = this.state;
        return(
            <header className="Navbar">
                <div className="Logo">
                    <Link to="/"> reactcolorpicker</Link>
                </div>
                    {showSlider && <div className="Slider-Container">
                            <span>Level: {level}</span>
                            <div className="Slider">
                                <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changing}/>
                            </div>
                        </div>
                    }
                    <div className="Select-Container">
                        <Select onChange={this.handleFormatChange} value={format}>
                            <MenuItem value="hex">Hex</MenuItem>
                            <MenuItem value="rgb">Rgb</MenuItem>
                            <MenuItem value="rgba">Rgba</MenuItem>
                        </Select>
                    </div>
                    <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "left"}} 
                    onClose={this.closeSnackbar}
                    open={this.state.open} autoHideDuration={3000} message={<span id="Message-Id">Format changed to {format}!</span>}
                    ContentProps={{"aria-describedby": "Message-Id"}} action={[
                        <IconButton onClick={this.closeSnackbar} color="inherit" key="close" aria-label="close">
                            <CloseIcon />
                        </IconButton>]}
                    />
            </header>
        )
    }
}

export default Navbar;