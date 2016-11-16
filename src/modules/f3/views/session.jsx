import React from 'react'
import classNames from 'classnames'

const Session = React.createClass({
    componentDidMount() {
        setTimeout(function () {
            var xscroll = new window.XScroll({renderTo: '#poa-session', scrollbarX: false, lockX: true, lockY: false})
            xscroll.render()
        }, 1000)
    },
    render() {
        let _style = {
            fontSize: window.innerWidth+'px',
        }
        let classes = {
            'xs-content':true,
            'iphone-plus':(window.innerWidth>400)
        }
        return (
            <div className='poa-session' id='poa-session' ref='session'>
                <div className="xs-container">
                    <div className={classNames(classes)} style={_style}>
                        <img className='q1-2' src={require('../../../img/f3-p1.png')}/>
                        <img className='q1-3' src={require('../../../img/f3-p2.png')}/>
                        <img className='q1-3' src={require('../../../img/f3-p3.png')}/>
                        <img className='q1-3' src={require('../../../img/f3-p4.png')}/>
                        <img className='q1-2' src={require('../../../img/f3-p5.png')}/>
                        <img className='q' src={require('../../../img/f3-p6.png')}/>
                        <img className='q1-3' src={require('../../../img/f3-p7.png')}/>
                        <img className='q1-3' src={require('../../../img/f3-p8.png')}/>
                        <img className='q1-3' src={require('../../../img/f3-p9.png')}/>
                        <img className='q1-3' src={require('../../../img/f3-p10.png')}/>
                        <img className='q1-3' src={require('../../../img/f3-p11.png')}/>
                        <img className='q1-3' src={require('../../../img/f3-p12.png')}/>
                        <img className='q1-3' src={require('../../../img/f3-p13.png')}/>
                        <img className='q1-3' src={require('../../../img/f3-p14.png')}/>
                    </div>
                </div>
            </div>
        )
    }
})

export default Session
