import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Settings.scss';
import FixedSidebar from "../shared-components/FixedSidebar/FixedSidebar";
import SettingsForm from './Forms/SettingsForm';

function Settings() {

    return (
        <>
            <div className="container-fluid settings-container">
                <div className="row">
                    <div className="settings-heading">
                        <h3>Game Settings</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" >
                        <SettingsForm />
                    </div>
                </div>
            </div>
            <FixedSidebar/>
        </>
    );
}

const mapStateToProps = state => state;

const connectedSettings = connect(mapStateToProps, null)(Settings);

export default connectedSettings;