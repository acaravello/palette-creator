import {DRAWER_WIDTH} from "../constants";
import sizes from "./sizes";

const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: "row",
        justifyContent: "space-between",
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
      navButtons: {
        display: "flex"
      },
      goBackButton: {
        display: "inherit", 
        maxHeight: "60px", 
        margin: "auto", 
        textDecoration: "none",
        marginRight: "10px"
      },
      goBack: {
        [sizes.down("xs")]: {
            lineHeight: "15px",
            fontSize: "13px",
            padding: "4px",
            minWidth: "40px"
        }
    }
});

export default styles;