/**
 * create by lijihong
 */
import ActionTypes from '../constants/actionTypes.js'
import request from 'superagent'

export function sayHello(name) {
    return (dispatch => {
        dispatch({
            type: ActionTypes.F3_SAY_HELLO,
            name: name
        })
        request.get('./')
    })
}
