import React, { useState } from 'react';
import Switch from 'react-switch';
import './Settings.scss';

export default function Settings({}) {

    let [ readWriteQs, setReadWriteQs ] = useState(false);

    const onReadWriteQs = (e) => {
        console.log(e);
        setReadWriteQs(!readWriteQs);
    };

    const retReadWriteQsLabel = () => {
        return readWriteQs ? 'From JSON file' : 'From Database';
    };

    return (
        <div className="container settings-container">
            <div className="row">
                <div className="settings-heading">
                    <h3>Game Settings</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12" >
                    <div className="settings-content-container">
                        <div className="settings-read-write-questions-header">
                            <h5>Reading/Writing Quiz Questions</h5>
                        </div>
                        <div className="settings-read-write-questions">
                            <div className="settings-read-write-questions-content">
                                <label>{ retReadWriteQsLabel() }</label>
                                <Switch
                                    onChange={onReadWriteQs}
                                    checked={readWriteQs}
                                    offColor="#099"
                                    onColor="#0f0"
                                    uncheckedIcon=""
                                    checkedIcon=""
                                    className="settings-toggle-align"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}