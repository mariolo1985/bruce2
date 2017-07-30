// Bar to display previous winners
import React, { Component } from 'react';
import { CurrentBattle, WeekMod } from '/';

class PastBar extends Component {
    render() {
        return (
            <div className='battle-pastbar'>
                <CurrentBattle {...this.props} />
                <WeekMod {...this.props} />
            </div>
        )
    }
}

export default PastBar;