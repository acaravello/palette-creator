import sizes from "./sizes";

const styles = {
    root: {
        textAlign: "center",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#111",
        overflowY: "auto",
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")]: {
            width: "80%"
        },
        [sizes.down("md")]: {
            width: "90%"
        },
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "#fff",
        alignItems: "center",
        "& a": {
            color: "#fff",
            textDecoration: "none"
        },
        "& a:hover": {
            opacity: "0.8"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2rem",
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2, 50%)",
            gridGap: "1rem",
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)",
        }
    },
}

export default styles;