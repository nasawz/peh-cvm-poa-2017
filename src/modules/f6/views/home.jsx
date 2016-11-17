/**
 * create by manyu
 */
import React from 'react'
import ReactDOM from 'react-dom'
import imgAnimator from '../../common/imgAnimator.js'
import Session from './session.jsx'

const Home = React.createClass({
    start() {
        this.setState({view: 'start'})
    },
    getInitialState: function() {
        return {view: 'home'}
    },
    componentDidMount() {
    		let target = ReactDOM.findDOMNode(this.refs.target)
	        this.imga = new imgAnimator(target, [
	            require('../../../img/f6-1.jpg'),
	            require('../../../img/f6-2.jpg')
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
                    <img className='kv f6-kv' src={require('../../../img/kv.png')}/>
                    <img className='start f6-title' src={require('../../../img/f6-m.png')}/>
                    <img className=' f6-start' onClick={this.start} src={require('../../../img/f6-start.png')}/>
                </div>
            )
		}else{
			return (
				<div className='poa-home'>
					<img className='start f6-title-2' src={require('../../../img/f6-m.png')}/>
				</div>
			)
		}
    },
    renderFooter() {
        if (this.state.view == 'start') {
            return (
                <div className='poa-footer f6-poa-footer'>
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
    renderTwo(){
    	if (this.state.view == 'start') {
            let style = {
                minHeight: window.innerHeight,
	            backgroundRepeat: 'no-repeat',
	            backgroundSize: `${window.innerWidth}px 100%`,
	            backgroundImage: `url(${require('../../../img/f6-bg.jpg')})`
	        }
	        return (
	        	<div className="layer-two" style={style}>

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
    	let style = {
            minHeight: window.innerHeight,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${window.innerWidth}px 100%`,
            backgroundImage: `url(${require('../../../img/f6-1.jpg')})`
         }

        return (
            <div  className='f6-poa-home'  ref='target' style={style}>
            	{this.renderTwo()}
            	<div className="layer-one">
            		<div className='poa-header'>
	                    <img className='logo1' src={require('../../../img/logo1.png')}/>
	                    <img className='logo2' src={require('../../../img/logo2.png')}/>
	                </div>
	                {this.renderHome()}
	                {this.renderSession()}
                    {this.renderArrow() }
	            	{this.renderFooter()}
            	</div>



            </div>
        )
    }

})

export default Home
