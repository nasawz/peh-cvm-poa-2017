/**
 * create by lijihong
 */

import { combineReducers } from 'redux'

import F3 from './f3.js'

export default function createReducer(asyncReducers) {
    return combineReducers({
        F3,
        ...asyncReducers
    })
}
