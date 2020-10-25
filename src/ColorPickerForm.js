import React, {Component} from "react";
import {ChromePicker} from "react-color";
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/ColorPickerFormStyles";

class ColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: {
                h: 250,
                s: 0,
                l: 0.2,
                a: 1
              },
              backgroundHex: "#303031",
              colorName: ""
        }
        this.updateColor = this.updateColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate() {
        const {colors} = this.props;
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
            let unique = true;
            for(let i = 0; i < colors.length; i++) {
              if(colors[i].name === value) {
                unique = false;
                break;
              }
            }
            return unique
          });
      
          ValidatorForm.addValidationRule('isColorUnique', (value) => {
            let unique = true;
            for(let i = 0; i < colors.length; i++) {
              if(colors[i].color === this.state.backgroundHex) {
                unique = false;
                break;
              }
            }
            return unique
          });
    }

    updateColor(newColor) {
        this.setState({
            background: newColor.hsl, 
            backgroundHex: newColor.hex
        })
    }

    handleChange(event) {
        this.setState({colorName: event.target.value})
    }

    render() {

        const {background, backgroundHex, colorName} = this.state;
        const {addNewColor, colors, maxNumber, classes} = this.props;
        const paletteIsFull = colors.length >= maxNumber;

        return (
            <div className={classes.chromePickerContainer}>
            <ChromePicker color={background} onChangeComplete={(newColor) => { this.updateColor(newColor);}} className={classes.picker}/>
            <ValidatorForm onSubmit={() => addNewColor(backgroundHex, colorName)} instantValidate={false}>
              <TextValidator value={colorName} onChange={this.handleChange} validators={['required', 'isColorNameUnique', 'isColorUnique']} placeholder="Add a name"
                    className={classes.colorInput} errorMessages={[ 'this field is required', 'color name must be unique', 'this color is already taken']} />
              <Button variant="contained" color="primary" type="submit" 
              className={classes.addColor} style={{backgroundColor: paletteIsFull ? "#8A8798" : backgroundHex}} disabled={paletteIsFull}>
                {paletteIsFull ? "Palette is full" : "Add Color"}
                </Button>
            </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm);