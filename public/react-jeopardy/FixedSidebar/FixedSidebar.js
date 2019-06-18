import React from 'react';
import './FixedSidebar.scss';

export default function FixedSidebar({menuSelect}) {

    return (
        <div className="fixed-sidebar">
            <div className="fixed-sidebar-content-container">
                <div onClick={() => menuSelect('GamePlay')}>Game Play</div>
                <div onClick={() => menuSelect('Settings')} >Settings</div>
            </div>
            <div className="fixed-sidebar-toggle-container">
                <div>
                    <p>Settings</p>
                </div>
            </div>
        </div>
    );
}