import React from "react";
import "./PaletteFooter.css";


function PaletteFooter(props) {
    const {name, emoji} = props;
    return(
        <footer className="PaletteFooter">
                {name}
                <span className="Emoji">{emoji}</span>
        </footer>
    )
}

export default PaletteFooter;