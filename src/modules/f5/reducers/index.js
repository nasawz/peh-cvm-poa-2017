/**
 * create by lijihong
 */

import { combineReducers } from 'redux'

import F5 from './f5.js'

export default function createReducer(asyncReducers) {
    return combineReducers({
        F5,
        ...asyncReducers
    })
}
