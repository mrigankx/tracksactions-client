import {
    makeStyles
} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    graphimage: {
        width: "100%",
        objectFit: 'contain',
        borderRadius: "20px"
    },
    card: {
        borderRadius: "20px",
    },

    content: {
        flex: '1 0 auto',
    },

    typedText: {
        position: "absolute",
        color: "white",
        top: "50px",
        left: "30%",
        width: "500px",

        transform: "translateX(-50%)",
        fontWeight: "bolder",
    },
    typedText2: {
        position: "absolute",
        color: "white",
        top: "50%",
        left: "30%",
        width: "500px",
        transform: "translateX(-50%)",
        fontWeight: "bolder",
    },
    [theme.breakpoints.down("sm")]: {
        typedText: {
            fontSize: "16px",
            top: "5%",
            left: "25%",
            width: "100px",
        },
        typedText2: {
            fontSize: "12px",
            top: "50%",
            left: "25%",
            width: "100px",
            transform: "translateX(-50%)",
            fontWeight: "bolder",
        },
    },


}));
export default useStyles;