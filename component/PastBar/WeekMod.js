// Each challenge/winners
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WeekMod extends Component {
    static PropTypes = {
        pastWinnersObj: PropTypes.arrayOf(PropTypes.shape({
            WeekLabel: PropTypes.string,
            WeekTitle: PropTypes.string,
            WeekWinnerName: PropTypes.string,
            WeekImgSrc: PropTypes.string
        })).isRequired
    }

    getPastWinndersObj = () => {
        const { pastWinnersObj } = this.props;
        const result = !pastWinnersObj ? null : pastWinnersObj;

        return result;
    }

    render() {
        const pastWinnersObj = this.getPastWinndersObj();
        return (
            <div className='past-battle-container'>
                {pastWinnersObj.map((item, key) => {
                    return (
                        <span className='battle-label'>{item.WeekLabel}</span>
                    )
                })}
            </div>
        )
    }
}

export default WeekMod;