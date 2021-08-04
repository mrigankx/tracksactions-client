import {
    makeStyles
} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        '& label': {
            color: '#808080',
        },
        '& .MuiInputBase-formControl': {
            color: "#fff",
            borderRadius: "36px",
            padding: 0,
            background: "#2B2B2B",
            boxShadow: "inset 25px 25px 49px #1d1d1d, inset -25px -25px 49px #393939"
        },
    },
}))


