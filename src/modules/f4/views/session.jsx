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
                        <img className='q' src={require('../../../img/f4_w1.png')}/>
                        <img className='q' src={require('../../../img/f4_w2.png')}/>
                        <img className='q' src={require('../../../img/f4_w3.png')}/>
                    </div>
                </div>
            </div>
        )
    }
})

export default Session
