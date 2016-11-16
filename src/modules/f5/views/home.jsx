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
            require('../../../img/f5-1.jpg'),
            require('../../../img/f5-2.jpg')
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
    },
    renderHome() {
        if (this.state.view == 'home') {
            return (
                <div className='poa-home'>
                    <img className='kv' src={require('../../../img/kv.png')}/>
                    <Slogan />
                    <img className='start' onClick={this.start} src={require('../../../img/f5-start.png')}/>
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
    renderBg() {
        if (this.state.view == 'start') {
            return <div style={{
                position: 'absolute',
                width: '100%',
                minHeight: window.innerHeight,
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${window.innerWidth}px 100%`,
                backgroundImage: `url(${require('../../../img/f5-3.jpg')})`
            }}></div>
        }
    },
    render() {

        return (
            <div ref='target' className='f5' style={{
                minHeight: window.innerHeight,
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${window.innerWidth}px 100%`,
                backgroundImage: `url(${require('../../../img/f5-1.jpg')})`
            }}>
                { this.renderBg() }
                <div className='f3-main'>
                    <div className='poa-header'>
                        <img className='logo1' src={require('../../../img/logo1.png')}/>
                        <img className='logo2' src={require('../../../img/logo2.png')}/>
                    </div>
                    { this.renderSlogan() }
                    { this.renderSession() }
                    { this.renderHome() }
                    { this.renderFooter() }
                </div>
            </div>
        )
    }

})

export default Home
