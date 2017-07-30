import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrentBattle extends Component {
    static PropTypes = {
        battleTitle: PropTypes.string,
        battleTimeLeft: PropTypes.string
    }

    static defaultProps = {
        battleTitle: '',
        battleTimeLeft: '0'
    }
    getBattleTitle = () => {
        const { battleTitle } = this.props;
        const result = !battleTitle ? CurrentBattle.defaultProps.battleTitle : battleTitle;

        return result;
    }

    getBattleTimeLeft = () => {
        const { battleTimeLeft } = this.props;
        const result = !battleTimeLeft ? CurrentBattle.defaultProps.battleTimeLeft : battleTimeLeft;

        return result;
    }

    render() {
        const battleTitle = this.getBattleTitle();
        var battleTimeLeft = this.getBattleTimeLeft();
        battleTimeLeft += ' hours left';

        return (
            <div className='current-battle-container'>
                <span className='battle-label'>Current Battle</span>
                <span className='battle-title'>{battleTitle}</span>
                <span className='battle-timer'>{battleTimeLeft}</span>
                <button className='btn-battle btn-download-battle'>Download Photo</button>
            </div>
        );
    }

}

export default CurrentBattle;