import React from 'react'

const Slogan = React.createClass({
    getDefaultProps: function() {
        return {
            width:window.innerWidth,
            height:217/640*window.innerWidth
        }
    },
    render() {
        return (<div style={{
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${window.innerWidth}px auto`,
            backgroundImage: `url(${require('../../../img/f4-ktv.png')})`,
        }} ref='slogan' className='slogan' ></div>)
    }
})

export default Slogan
