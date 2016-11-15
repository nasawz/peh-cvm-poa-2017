/* eslint-disable indent */

/**
 * create by lijihong
 */

import ActionTypes from '../constants/actionTypes.js'

import merge from 'lodash/merge'

const initialState = {
    name: '',
}

export default function F3(state = initialState, action = null) {
    switch (action.type) {
        case ActionTypes.F3_SAY_HELLO:
            return merge({}, state, action)
        default:
            return state
    }
}
