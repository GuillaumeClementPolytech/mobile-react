import {connect} from 'react-redux'
import {State} from "../state";
import NavBar from "../components/NavBar";
import {logout} from "../actions/action";

const mapStateToProps = (state: State) => {
    const index = state.params.activeUser;
    if (index) {
        return {
            active: true,
            admin: !!state.entities.Users[index].isAdmin
        }
    } else {
        return {
            active: false,
            admin: false
        }
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        logoutCallback: () => {
            dispatch(logout())
        }
    }
};

const DynNavBar = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default DynNavBar