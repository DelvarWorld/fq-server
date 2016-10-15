import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';

export default class Login extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const username = this.refs.username;
        const password = this.refs.password;
        this.props.login( username.value, password.value );
    }

    render() {

        const { logout, } = this.props;
        const styles = require('./Login.scss');

        return <div className={ styles.loginForm }>
            <form onSubmit={ this.handleSubmit }>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="username">Username or email</label>
                        <div className="form-group">
                            <input
                                id="username"
                                type="text"
                                ref="username"
                                placeholder="Username or email"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="password">Password</label>
                        <div className="form-group">
                            <input
                                id="password"
                                type="password"
                                placeholder="password"
                                ref="password"
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
                <button className="btn btn-success" onClick={this.handleSubmit}>
                    <i className="fa fa-sign-in"/>{' '}Log In
                </button>
            </form>
        </div>;

    }
}
