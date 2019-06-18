import React from 'react';
import './FixedSidebar.scss';

export default function FixedSidebar(props) {

    return (
        <div className="fixed-sidebar">
            <div className="fixed-sidebar-content-container">
                <div>Stuff</div>
                <div>More stuff</div>
            </div>
            <div className="fixed-sidebar-toggle-container">
                <div>Toggle</div>
            </div>
        </div>
    );
}