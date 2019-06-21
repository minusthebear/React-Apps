import React from 'react';
import './FixedSidebar.scss';
import {history} from "../../redux/history";

export default function FixedSidebar() {

    const menuSelect = (val) => {
        if (val) {
            switch (val) {
                case 'Main':
                    history.push('/Main');
                    break;
                case 'Weather':
                    history.push('/Weather');
                    break;
                case 'Quiz':
                    history.push('/Quiz');
                    break;
                case 'TicTacToe':
                    history.push('/Tic-Tac-Toe');
                    break;
                case 'Settings':
                    history.push('/Settings');
                    break;
            }

        }
    };

    return (
        <div className="fixed-sidebar">
            <div className="fixed-sidebar-content-container">
                <div onClick={() => menuSelect('Main')}>Home Page</div>
                <div onClick={() => menuSelect('Quiz')}>Quiz Game</div>
                <div onClick={() => menuSelect('Weather')}>Weather App</div>
                <div onClick={() => menuSelect('TicTacToe')}>Tic-Tac-Toe</div>
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