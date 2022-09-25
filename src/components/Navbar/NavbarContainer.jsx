import React from 'react';

import {connect} from 'react-redux';
import Navbar from "./Navbar";


let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}


export default connect(mapStateToProps, {})(Navbar);