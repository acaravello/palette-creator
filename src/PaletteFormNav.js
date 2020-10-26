import React, { Component } from "react";
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import PaletteMetaForm from "./PaletteMetaForm";
import styles from "./styles/PaletteFormNavStyles";
import seedColors from "./seedColors"


class PaletteFormNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: seedColors[0].colors
        }
        this.saveNewPalette = this.saveNewPalette.bind(this);
    }


      saveNewPalette(newPaletteName, emoji) {
        this.props.handleNewPalette(newPaletteName, emoji);
      }

    render() {

        const {classes, open, handleDrawerOpen, palettes} = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open})}>
                    <Toolbar>
                        <IconButton
                            color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, open && classes.hide)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>Create a Palette</Typography>
                    </Toolbar>
                    <div className={classes.navButtons}>
                    <Link to="/" className={classes.goBackButton}><Button variant="contained" color="default" className={classes.goBack}>Go Back</Button></Link>
                      <PaletteMetaForm saveNewPalette={this.saveNewPalette} palettes={palettes}/>
                    </div>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(PaletteFormNav);