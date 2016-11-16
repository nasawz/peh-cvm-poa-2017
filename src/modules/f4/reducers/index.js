/**
 * create by lijie
 */

import { combineReducers } from 'redux'

import F4 from './f4.js'

export default function createReducer(asyncReducers) {
    return combineReducers({
        F4,
        ...asyncReducers
    })
}
