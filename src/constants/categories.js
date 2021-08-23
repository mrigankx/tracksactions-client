import RestaurantIcon from '@material-ui/icons/Restaurant';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SchoolIcon from '@material-ui/icons/School';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RedeemIcon from '@material-ui/icons/Redeem';
import PaymentIcon from '@material-ui/icons/Payment';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AddIcon from '@material-ui/icons/Add';

const CATEGORIES = [
    { name: "Food", icon: <RestaurantIcon /> },
    { name: "Entertainment", icon: <SportsEsportsIcon /> },
    { name: "Education", icon: <SchoolIcon /> },
    { name: "Shopping", icon: <ShoppingCartIcon /> },
    { name: "Health", icon: <FitnessCenterIcon /> },
    { name: "Gifts", icon: <RedeemIcon /> },
    { name: "Investments", icon: <TrendingUpIcon /> },
    { name: "Bills", icon: <PaymentIcon /> },
    { name: "Travel", icon: <FlightTakeoffIcon /> },
    { name: "Smoking", icon: <SmokingRoomsIcon /> },
    { name: "Others", icon: <AddIcon /> },
];
export default CATEGORIES;