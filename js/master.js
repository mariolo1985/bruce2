import React from 'react';
import { render } from 'react-dom';
import { Picmod, BruceBanner } from '../build';

window.onload = function () {
    // Banner
    render(
        (
            <BruceBanner />
        ),
        document.getElementById('bruce-banner')
    )
    // Child pics
    render(
        (
            <Picmod />
        ),
        document.getElementById('test')
    );
}