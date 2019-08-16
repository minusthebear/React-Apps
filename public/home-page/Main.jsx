import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './Main.scss';
import {Link} from "react-router-dom";
import FixedSidebar from "../shared-components/FixedSidebar/FixedSidebar";
import axios from "axios";

const URL = 'http://localhost:8080';

const Main = (props) => {
    // TODO: make more responsive to different viewport sizes

    useEffect( () => {
        // console.log('In useEffect');
        // async function callImmediately() {
        //     console.log('In callImmediately');
        //     // if (sessionStorage.getItem('react-apps')) {
        //         axios.defaults.withCredentials = true;
        //         await axios.post(URL + '/token_credential_check', )
        //             .then((res) => {
        //                 console.log(res);
        //             }).catch((e) => {
        //                 console.log(e);
        //             });
        //     // }
        // }
        // callImmediately();
    });

    return (
        <>
            <div className="container-fluid main-page-container">
                <div className="row main-page-row">
                    <div className="col-md-6">
                        <Link to="/Quiz" >
                            <div className="main-page-option-container main-page-option-first">
                                <div>Play the quiz</div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/Weather" >
                            <div className="main-page-option-container main-page-option-second">
                                <div>Check the weather</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row main-page-row">
                    <div className="col-md-6">
                        <Link to="/Tic-tac-toe" >
                            <div className="main-page-option-container main-page-option-first">
                                <div>Play tic-tac-toe</div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/Settings" >
                            <div className="main-page-option-container main-page-option-second">
                                <div>Settings</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <FixedSidebar/>
        </>

    );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, null)(Main);