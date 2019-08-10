import Formsy from "formsy-react";
import Switch from "react-switch";
import React, {useState} from "react";
import {connect} from 'react-redux';
import {loginUserAccount} from "../../redux/actions/loginActions";
import {saveSettings} from "../api/settingsApi";

function SettingsForm({user}) {

    const setSubmitForm = () => {
        return {
            readWriteQs: readWriteQs ? 'JSON' : 'Mongo'
        }
    };

    let [ readWriteQs, setReadWriteQs ] = useState(false);

    const onReadWriteQs = (e) => {
        setReadWriteQs(!readWriteQs);
    };

    const retReadWriteQsLabel = () => {
        return readWriteQs ? 'From JSON file' : 'From Database';
    };

    async function submitSettings() {
        await saveSettings(setSubmitForm());
    }

    console.log(user);

    return (
        <Formsy onSubmit={submitSettings}>
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
                            uncheckedIcon={false}
                            checkedIcon={false}
                            className="settings-toggle-align"
                        />
                    </div>
                </div>
            </div>
            <div className="settings-button-container">
                <button className="btn btn-success">Save Settings</button>
            </div>
        </Formsy>
    );
}

const mapStateToProps = state => {
    return {
        user: state.sessionReducer.user
    }
};
const mapDispatchToProps = dispatch => {
    return {
    };
};

const connectedSettingsForm = connect(mapStateToProps, mapDispatchToProps)(SettingsForm);



export default connectedSettingsForm;
