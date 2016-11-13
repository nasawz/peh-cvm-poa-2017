/**
 * create by nasa.wang
 */

import { combineReducers } from 'redux'

import F1 from './f1.js'

export default function createReducer(asyncReducers) {
    return combineReducers({
        F1,
        ...asyncReducers
    })
}
