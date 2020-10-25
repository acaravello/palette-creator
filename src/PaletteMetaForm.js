import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import {Picker} from "emoji-mart";
import 'emoji-mart/css/emoji-mart.css'
import styles from "./styles/PaletteMetaFormStyles";

class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            newPaletteName: "",
            emoji: "",
            openEmojiModal: false
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChangeForPalette = this.handleChangeForPalette.bind(this);
        this.setEmoji = this.setEmoji.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const {palettes} = this.props;
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
            let unique = true;
            for (let i = 0; i < palettes.length; i++) {
                if (palettes[i].paletteName === this.state.newPaletteName) {
                    unique = false;
                    break;
                }
            }
            return unique;
        });
    }

    handleChangeForPalette(event) {
        this.setState({newPaletteName: event.target.value})
    }

    handleClickOpen() {
        this.setState({ open: true })
    }

    handleClose() {
        this.setState({ open: false })
    }

    handleSubmit() {
        this.setState({
            open:false,
            openEmojiModal: true
        })
    }

    setEmoji(emojiObject) {
        const emoji = emojiObject.native
        this.setState({openEmojiModal: false})
        this.props.saveNewPalette(this.state.newPaletteName, emoji)
    }

    render() {
        const {newPaletteName} = this.state;
        const {classes} = this.props;
        return (
            <div className={classes.modalButton}>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
                    Save Palette
                </Button>
                <Dialog open ={this.state.openEmojiModal}>
                    <DialogTitle>Choose a Palette Emoji</DialogTitle>
                <Picker set="google" value={this.state.emoji} onSelect={this.setEmoji} title=""/>
                </Dialog>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title" className={classes.modalTitle}>Choose a Palette Name</DialogTitle>
                    <ValidatorForm onSubmit={this.handleSubmit} className={classes.form}>
                    <DialogContent>
                        <DialogContentText>
                            Enter an unique name for yur palette
                    </DialogContentText>
                            <TextValidator autoFocus fullWidth name="newPaletteName" label="Palette Name" value={newPaletteName} onChange={this.handleChangeForPalette}
                                validators={["required", "isPaletteNameUnique"]} errorMessages={["This field is required", "This name is already taken"]}
                                className={classes.modalInput} />
                    </DialogContent>
                    
                    <DialogActions className={classes.buttonsContainer}>
                    <Button onClick={this.handleClose} color="primary"> Cancel</Button>
                    <Button variant="contained" color="secondary" type="submit" className={classes.saveButton}>Save Palette</Button>
                    </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteMetaForm);