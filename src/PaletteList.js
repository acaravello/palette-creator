import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import styles from "./styles/PaletteListStyles";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./PaletteList.css";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from '@material-ui/core/Avatar';
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

class PaletteList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openDialog: false,
            idDeletingPalette: ""
        }
        this.goToPalette = this.goToPalette.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.deletePaletteDialog = this.deletePaletteDialog.bind(this);
        this.cancelDeletingPalette = this.cancelDeletingPalette.bind(this);
    }

    goToPalette(id) {
        this.props.history.push(`/palette/${id}`);
    }

    openDialog(id) {
        this.setState({openDialog: true, idDeletingPalette: id})
    }

    deletePaletteDialog() {
        this.setState({openDialog: false, idDeletingPalette: ""})
        this.props.deletePalette(this.state.idDeletingPalette)
    }

    cancelDeletingPalette() {
        this.setState({openDialog: false, idDeletingPalette: ""})
    }

    render() {
        const { palettes, classes } = this.props;
        const {openDialog} = this.state;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(palette => {
                            return (
                                <CSSTransition key={palette.id} classNames='fade' timeout={400}>
                                    <MiniPalette {...palette} key={palette.id} deletePalette={() => this.openDialog(palette.id)} handleClick={() => { this.goToPalette(palette.id) }} />
                                </CSSTransition>
                            )
                        })}
                    </TransitionGroup>
                </div>

                <Dialog open={openDialog}>
                    <DialogTitle>Delete this palette?</DialogTitle>
                    <List>
                            <ListItem button onClick={this.deletePaletteDialog}>
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar} style={{backgroundColor: blue[100], color: blue[600]}}>
                                        <CheckIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Delete"/>
                            </ListItem>
                     

                        <ListItem autoFocus button onClick={this.cancelDeletingPalette}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                    <CloseIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Cancel" />
                        </ListItem>
                    </List>
                </Dialog>

            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);