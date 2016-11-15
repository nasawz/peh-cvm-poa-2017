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
                        <img className='q' src={require('../../../img/q.png')}/>
                        <img className='q1-2' src={require('../../../img/q1-2.png')}/>
                        <img className='q1-3' src={require('../../../img/q1-3.png')}/>
                        <img className='q2-2' src={require('../../../img/q2-2.png')}/>
                        <img className='q2-3' src={require('../../../img/q2-3.png')}/>
                    </div>
                </div>
            </div>
        )
    }
})

export default Session
