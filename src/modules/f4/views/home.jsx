/**
 * create by lijie
 */

 import React from 'react'
 import ReactDOM from 'react-dom'
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
         this.imga1 = new imgAnimator(target, [
             require('../../../img/f4_bg_1.jpg'),
             require('../../../img/f4_bg_2.jpg'),
             require('../../../img/f4_bg_3.jpg'),
             require('../../../img/f4_bg_4.jpg'),
             require('../../../img/f4_bg_3.jpg'),
             require('../../../img/f4_bg_2.jpg'),
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
     renderFooter() {
         if (this.state.view == 'start') {
             return (
                 <div className='poa-footer'>
                     <img className='kv' src={require('../../../img/kv.png')}/>
                 </div>
             )
         }
     },
     renderHome() {
         if (this.state.view == 'home') {
             return (
                 <div className='poa-home'>
                     <img className='kv' src={require('../../../img/kv.png')}/>
                     <Slogan />
                     <img className='start' onClick={this.start} src={require('../../../img/start4.png')}/>
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
         let style={}
         if(this.state.view == 'start'){
             style={
                 minHeight: window.innerHeight,
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: '100% 100%',
                 backgroundImage: `url(${require('../../../img/f4_bg2.jpg')})`
             }
         }

         return (
             <div ref='target' className='f4-poa-home'  style={{
                 minHeight: window.innerHeight,
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: '100% 100%',
                 backgroundImage: `url(${require('../../../img/f4_bg_1.jpg')})`
             }}>
             <div style={style}>
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
             </div>
         )
     }

 })

 export default Home
