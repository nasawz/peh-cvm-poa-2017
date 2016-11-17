/**
 * create by nasa.wang
 */
import React from 'react'
import ReactDOM from 'react-dom'
// import anime from 'animejs'
import imgAnimator from '../../common/imgAnimator.js'
import Session from './session.jsx'
import Slogan from './slogan.jsx'

const Home = React.createClass({
    start() {
        this.setState({view: 'start'})
    },
    getInitialState: function() {
        return {view: 'home'}
        // return {view: 'start'}
    },
    componentDidMount() {
        let target = ReactDOM.findDOMNode(this.refs.target)
        this.imga = new imgAnimator(target, [
            require('../../../img/f3-1.jpg'),
            require('../../../img/f3-2.jpg'),
            require('../../../img/f3-3.jpg'),
            require('../../../img/f3-4.jpg')
        ], {
            loop: true,
            startOnLoad: true,
            duration: 9999999,
            fps: 600,
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
    renderHome() {
        if (this.state.view == 'home') {
            return (
                <div className='poa-home'>
                    <img className='kv' src={require('../../../img/kv.png')}/>
                    <Slogan />
                    <img className='start' onClick={this.start} src={require('../../../img/f3-start.png')}/>
                </div>
            )
        }
    },
    renderFooter() {
        if (this.state.view == 'start') {
            return (
                <div className='poa-footer'>
                    <img className='kv' src={require('../../../img/kv.png')}/>
                </div>
            )
        }
    },
    renderSession(){
        if (this.state.view == 'start') {
            return <Session />
        }
    },
    renderSlogan(){
        if (this.state.view == 'start') {
            return (
                <div className='poa-start'>
                    <Slogan />
                </div>
            )
        }
    },
    renderArrow() {
        if (this.state.view == 'start') {
            return (
                <div className='arrow'></div>
            )
        }
    },
    render() {

        return (
            <div ref='target' className='f3' style={{
                minHeight: window.innerHeight,
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${window.innerWidth}px 100%`,
                backgroundImage: `url(${require('../../../img/f3-1.jpg')})`
            }}>
                <div className='poa-header'>
                    <img className='logo1' src={require('../../../img/logo1.png')}/>
                    <img className='logo2' src={require('../../../img/logo2.png')}/>
                </div>
                { this.renderSlogan() }
                { this.renderSession() }
                {this.renderHome()}
                {this.renderArrow() }
                {this.renderFooter()}
            </div>
        )
    }

})

export default Home
