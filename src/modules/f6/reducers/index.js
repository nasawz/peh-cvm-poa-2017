/**
 * create by manyu
 */

import { combineReducers } from 'redux'

import F6 from './f6.js'

export default function createReducer(asyncReducers) {
    return combineReducers({
        F6,
        ...asyncReducers
    })
}
