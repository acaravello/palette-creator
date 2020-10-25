import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorList from "./DraggableColorList";
import {arrayMove} from "react-sortable-hoc";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import useStyles from "./styles/NewPaletteFormStyles";
import seedColors from "./seedColors";

export default function NewPaletteForm({savePalette, history, palettes}) {
  const classes = useStyles();

  //Hooks
  const [open, setOpen] = React.useState(false);
  const [colors, setColors] = React.useState(
    seedColors[0].colors
    );

  const [maxNumber] = React.useState(20);

  const paletteIsFull = colors.length >= maxNumber;

  //useEffect is the quivalent of componentDidMount with hooks

  //Methods for hooks
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (colorHex, colorName) => {
      const newColor = {color: colorHex, name: colorName}
      setColors(colors.concat(newColor));
  }

  
  const handleNewPalette = (newPaletteName, emoji) => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLocaleLowerCase().replace(/ /g, "-"),
      colors: colors,
      emoji: emoji
    }
    savePalette(newPalette);
    history.push("/")
  }

  const deleteColor = (name) => {
    setColors(colors.filter(color => color.name !== name));
  }

  const onSortEnd = ({oldIndex, newIndex}) => {
    setColors(arrayMove(colors, oldIndex, newIndex))
  }

  const clearColors = () => {
    setColors([]);
  }

  const checkDuplicate = (colorToCheck) => {
    return colors.some(color => color.name === colorToCheck.name);
  }

  const addRandomColor = () => {
    const allColors = palettes.map(p => p.colors).flat();
    let rand;
    let randColor;
    let isDuplicate = true
    while(isDuplicate) {
      rand = Math.floor(Math.random() * allColors.length);
      randColor = allColors[rand];
      isDuplicate = checkDuplicate(randColor);
    }
    setColors([...colors, randColor]);
  }

  return (
    <div className={classes.root}>
      <PaletteFormNav open={open} palettes={palettes} handleNewPalette={handleNewPalette} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{paper: classes.drawerPaper,}}>
        
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon /> 
          </IconButton>
        </div>
        <Divider />
        <div className={classes.drawerContainer}>
        <Typography variant="h4">Design Your Palette</Typography>
        <div className={classes.buttons}>
        <Button variant="contained" color="secondary" onClick={clearColors}>Clear Palette</Button>
        <Button variant="contained" color="primary" onClick={addRandomColor} disabled={paletteIsFull}>Random Color</Button>
        </div>
        <ColorPickerForm addNewColor={addNewColor} colors={colors} maxNumber={maxNumber}/>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {[classes.contentShift]: open})}>
        <div className={classes.drawerHeader} />
            <DraggableColorList colors={colors} deleteColor={deleteColor} axis="xy" onSortEnd={onSortEnd}/>
      </main>
    </div>
  );
}
