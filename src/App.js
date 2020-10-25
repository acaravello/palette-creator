import React, {Component} from 'react';
import './App.css';
import Palette from "./Palette";
import seedColors from "./seedColors";
import {generatePalette} from "./colorHelpers";
import {Route, Switch} from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

class App extends Component {

  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    if(savedPalettes && savedPalettes.length > 0) {
      this.state = {
        palettes: savedPalettes
      }
    } else {

    }
    this.state = {
      palettes: seedColors
    }
    
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }
  
  findPalette(id) {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    })
  }

  savePalette(newPalette) {
    this.setState({palettes: [...this.state.palettes, newPalette]}, this.syncLocalStorage)
  }

  syncLocalStorage() {
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  }

  deletePalette(id) {
    this.setState(oldState => ({palettes: oldState.palettes.filter(palette => palette.id !== id)}), this.syncLocalStorage);
  }


  render() {
    const {palettes} = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(routeProps) => {return <PaletteList palettes={palettes} deletePalette={this.deletePalette} {...routeProps}/>}} />
          <Route exact path="/palette/new" render={(routeProps) => {return <NewPaletteForm savePalette={this.savePalette} palettes={this.state.palettes} {...routeProps}/>}} />
          <Route exact path="/palette/:id" 
            render={(routeProps) => (<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />)}
          />
          <Route exact path="/palette/:paletteId/:colorId" render={(routeProps) => {
            return <SingleColorPalette palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} colorId={routeProps.match.params.colorId}/>
          }
          }/>
           <Route render={(routeProps) => {return <PaletteList palettes={palettes} deletePalette={this.deletePalette} {...routeProps}/>}} />
        </Switch>
      </div>
    );
  }
}

export default App;
