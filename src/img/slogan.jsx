import React from 'react'
import ReactDOM from 'react-dom'
import imgAnimator from '../../common/imgAnimator.js'

const Slogan = React.createClass({
    componentDidMount() {
        let slogan = ReactDOM.findDOMNode(this.refs.slogan)
        this.imga = new imgAnimator(slogan, [
            require('../../../img/m1.png'), require('../../../img/m2.png'), require('../../../img/m3.png'), require('../../../img/m2.png')
        ], {
            loop: true,
            startOnLoad: true,
            duration: 9999999,
            fps: 300,
            preprocess: function() {
                // console.log("loading...");
            },
            callback: function() {
                // console.log("animation finished!");
            }
        })
    },
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
            backgroundImage: `url(${require('../../../img/m1.png')})`,
        }} ref='slogan' className='slogan' ></div>)
    }
})

export default Slogan
