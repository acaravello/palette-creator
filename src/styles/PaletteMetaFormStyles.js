import sizes from "./sizes";

const styles = {
    modalButton: {
        display: "inherit",
        margin: "auto",
        maxHeight: "60px",
        marginRight: "10px"
    },
    modalInput: {
        marginBottom: "10px",
    },
    form: {
        width: "400px",
        padding: "20px 20px 50px 20px"
    },
    buttonsContainer: {
        marginTop: "30px",
        marginBottom: "-40px"
    },
    saveButton: {
        maxHeight: "60px"
    },
    modalTitle: {
        textAlign: "center"
    },
    modalPaletteButton: {
        [sizes.down("xs")]: {
            lineHeight: "15px",
            fontSize: "13px",
            padding: "4px",
            minWidth: "40px"
        }
    },
    dialogModal: {
        "& div": {
            overflowY: "inherit"
        }
    }
}

export default styles;