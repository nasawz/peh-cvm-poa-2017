/**
 * create by lijie
 */

 import React from 'react'
 import Session from './session.jsx'
 import Slogan from './slogan.jsx'

 const Home = React.createClass({
     start() {
         this.setState({view: 'start'})
     },
     getInitialState: function() {
         return {view: 'home'}
     },
     componentDidMount() {

     },
     renderHome() {
         if (this.state.view == 'home') {
             return (
                 <div className='poa-home'>
                     <img className='kv' src={require('../../../img/kv.png')}/>
                     <Slogan />
                     <img className='start' onClick={this.start} src={require('../../../img/start2.png')}/>
                 </div>
             )
         }else{
             return (
                 <div className='poa-home'>
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
     renderArrow() {
         if (this.state.view == 'start') {
             return (
                <div className='arrow'></div>
             )
         }
     },
     render() {
         let style = {
             minHeight: window.innerHeight,
             backgroundRepeat: 'no-repeat',
             backgroundSize: '100% 100%',
             backgroundImage: `url(${require('../../../img/f2_bg.jpg')})`
         }
         if (this.state.view == 'start') {
             style = {
                 minHeight: window.innerHeight,
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: '100% 100%',
                 backgroundImage: `url(${require('../../../img/f2_bg2.jpg')})`
             }
         }
         return (
             <div className='f2-poa-home' ref='target' style={style}>
                 <div className='poa-header'>
                     <img className='logo1' src={require('../../../img/logo1.png')}/>
                     <img className='logo2' src={require('../../../img/logo2.png')}/>
                 </div>
                 { this.renderSession() }
                 {this.renderHome()}
                 {this.renderArrow() }
             </div>
         )
     }

 })

 export default Home
