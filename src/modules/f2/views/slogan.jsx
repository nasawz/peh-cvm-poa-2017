import React from 'react'
import ReactDOM from 'react-dom'
import imgAnimator from '../../common/imgAnimator.js'

const Slogan = React.createClass({
    componentDidMount() {
        let man = ReactDOM.findDOMNode(this.refs.man)
        this.imga = new imgAnimator(man, [
            require('../../../img/f2_1.png'),
            require('../../../img/f2_2.png'),
            require('../../../img/f2_3.png'),
            require('../../../img/f2_4.png'),
            require('../../../img/f2_5.png'),
            require('../../../img/f2_4.png'),
            require('../../../img/f2_3.png'),
            require('../../../img/f2_2.png')
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
            height:373/640*window.innerWidth
        }
    },
    render() {
        return (<div style={{
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${window.innerWidth}px auto`,
            backgroundImage: `url(${require('../../../img/f2_img1.png')})`,
        }} ref='slogan' className='slogan' >
        <div className='man' ref='man' style={{
            backgroundImage: `url(${require('../../../img/f2_1.png')})`,
            backgroundRepeat: 'no-repeat',
            height:94/640*window.innerWidth,
            bottom:'-18px',
            backgroundSize: `${window.innerWidth}px auto`,}}>
        </div>
        </div>)
    }
})

export default Slogan
