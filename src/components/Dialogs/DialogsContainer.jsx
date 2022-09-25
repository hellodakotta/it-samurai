import React from 'react';

import {addMessageCreator, updateMessageTextCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.userAuth.isAuth,
        userId: state.userAuth.userId
    }
}

export default compose(
    connect(mapStateToProps, {
        addMessage: addMessageCreator
    }),
    withAuthRedirect
)(Dialogs);