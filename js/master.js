import React from 'react';
import { render } from 'react-dom';
import { BruceBanner, PastBar } from '../build';

window.onload = function () {
    // Banner
    render(
        (
            <BruceBanner />
        ),
        document.getElementById('bruce-banner')
    );
    // Past bar
    const pastWinnersObj = [
        {
            WeekLabel: 'Last Week',
            WeekTitle: 'Steve Harvey',
            WeekWinnerName: '1st Captain Falcon',
            WeekImgSrc: './images/bg.jpg'
        }
    ]
    render(
        (
            <PastBar battleTitle='Trump Jr' battleTimeLeft='12' pastWinnersObj={pastWinnersObj} />
        ),
        document.getElementById('bruce-pastbar')
    );
    // Child pics

}