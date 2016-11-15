/**
 * create by lijie
 */

import { combineReducers } from 'redux'

import F2 from './f2.js'

export default function createReducer(asyncReducers) {
    return combineReducers({
        F2,
        ...asyncReducers
    })
}
