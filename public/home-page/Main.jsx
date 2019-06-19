import React from 'react';
import {connect} from 'react-redux';
import './Main.scss';
import {Link} from "react-router-dom";

const Main = (props) => {
    // TODO: make more responsive to different viewport sizes

    return (
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
                <div className="offset-3 col-md-6">
                    <Link to="/Quiz" >
                        <div className="main-page-option-container main-page-option-only">
                            <div>Play tic-tac-toe</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, null)(Main);