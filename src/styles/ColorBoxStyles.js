import chroma from "chroma-js";
import sizes from "./sizes";

const styles = {
    colorBox: {
        width: "20%",
        height: props => props.showFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        "&:hover button": {
            opacity: "1",
            transition: "0.5s"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: props => (props.showFullPalette ? "20%" : "33.3%")
        },
        [sizes.down("md")]: {
            width: "50%",
            height: props => (props.showFullPalette ? "10%" : "20%")
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: props => (props.showFullPalette ? "5%" : "10%")
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.6 ? "rgba(0, 0, 0, 0.5)" : "#fff"
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.08 ? "#fff" : "rgba(0, 0, 0, 0.5)"
    },
    seeMore: {
        color: props => chroma(props.background).luminance() >= 0.6 ? "rgba(0, 0, 0, 0.5)" : "#fff",
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom: "0px",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase",
        fontSize: "13px"
    },
    copyButton: {
        color: props => chroma(props.background).luminance() >= 0.6 ? "rgba(0, 0, 0, 0.5)" : "#fff",
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        outline: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none",
        opacity: "0",
        cursor: "pointer"
    }
}

export default styles;