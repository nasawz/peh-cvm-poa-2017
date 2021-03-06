/**
 * create by lijie
 */

import * as Actions from '../actions/homeActions.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Home from '../views/home.jsx'

function mapProps(state) {
    return {
        name: state.F4.name,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapProps,mapDispatchToProps)(Home)
