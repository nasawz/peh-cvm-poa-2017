/**
 * create by nasa.wang
 */
import React from 'react'
import ReactDOM from 'react-dom'
import anime from 'animejs'
import imgAnimator from '../../common/imgAnimator.js'

const Home = React.createClass({
    componentDidMount() {
        let target = ReactDOM.findDOMNode(this.refs.target)
        new imgAnimator(target, [
            require('../../../img/1.jpg'), require('../../../img/2.jpg'), require('../../../img/3.jpg'),require('../../../img/2.jpg')
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
        // anime({
        //     targets: target,
        //     // d: 'M72,160 C72,115 16,84 50,50 C84,16 115,72 160,72 C205,72 236,16 270,50 C304,84 248,115 248,160 C248,205 304,236 270,270 C236,304 205,248 160,248 C115,248 84,304 50,270 C16,236 72,205 72,160 Z',
        //     src: [
        //         require('../../../img/1.png'), require('../../../img/2.png'), require('../../../img/3.png')
        //     ],
        //     backgroundColor: 'hsl(210,100%,60%)',
        //     duration: 2000,
        //     direction: 'alternate',
        //     loop: true
        // })
    },
    render() {
        return (
            <div ref='target' style={{
                minHeight: window.innerHeight,
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${window.innerWidth}px auto`,
                backgroundImage: `url(${require('../../../img/1.jpg')})`
            }}>
                <div className='poa-header'>
                    <img className='logo1' src={require('../../../img/logo1.png')}/>
                    <img className='logo2' src={require('../../../img/logo2.png')}/>
                </div>
                <div className='poa-home'>
                    <img className='kv' src={require('../../../img/kv.png')}/>
                    <img className='start' src={require('../../../img/start.png')}/>
                </div>
            </div>
        )
    }

})

export default Home
