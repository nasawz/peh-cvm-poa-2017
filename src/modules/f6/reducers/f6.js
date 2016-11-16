/* eslint-disable indent */

/**
 * create by manyu
 */

import ActionTypes from '../constants/actionTypes.js'

import merge from 'lodash/merge'

const initialState = {
    name: '',
}

export default function F6(state = initialState, action = null) {
    switch (action.type) {
        case ActionTypes.F6_SAY_HELLO:
            return merge({}, state, action)
        default:
            return state
    }
}
