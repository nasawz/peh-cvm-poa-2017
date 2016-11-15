import React from 'react'
import classNames from 'classnames'

const Session = React.createClass({
    componentDidMount() {
        var xscroll = new window.XScroll({renderTo: '#poa-session', scrollbarX: false, lockX: true, lockY: false})
        xscroll.render()
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
                        <img className='q' src={require('../../../img/f2_w1.png')}/>
                        <img className='q' src={require('../../../img/f2_w2.png')}/>

                        <br />
                    </div>
                </div>
            </div>
        )
    }
})

export default Session
