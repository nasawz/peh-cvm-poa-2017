/* eslint-disable indent */

/**
 * create by lijie
 */

import ActionTypes from '../constants/actionTypes.js'

import merge from 'lodash/merge'

const initialState = {
    name: '',
}

export default function F4(state = initialState, action = null) {
    switch (action.type) {
        case ActionTypes.F4_SAY_HELLO:
            return merge({}, state, action)
        default:
            return state
    }
}
