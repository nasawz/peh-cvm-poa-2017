import React from 'react'

const Session = React.createClass({
    componentDidMount() {
        var xscroll = new window.XScroll({renderTo: '#poa-session', scrollbarX: false, lockX: true, lockY: false})
        xscroll.render()
    },
    render() {
        return (
            <div className='poa-session' id='poa-session' ref='session'>
                <div className="xs-container">
                    <div className="xs-content">
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
