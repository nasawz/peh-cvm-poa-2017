import React from 'react'
import ReactDOM from 'react-dom'
import imgAnimator from '../../common/imgAnimator.js'

const Slogan = React.createClass({
    getDefaultProps: function() {
        return {
            width:window.innerWidth,
            height:198/850*window.innerWidth
        }
    },
    render() {
        return (<div style={{
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${window.innerWidth*1.34}px auto`,
            backgroundImage: `url(${require('../../../img/f5-m1.png')})`,
            backgroundPosition: 'center 0'
        }} ref='slogan' className='slogan' ></div>)
    }
})

export default Slogan
