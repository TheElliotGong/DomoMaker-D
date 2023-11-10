const helper = require('./helper.js');
const React = require('react');
const ReactDOM = require('react-dom');

const handlePasswordChange = (e) => {
    e.preventDefault();
    helper.hideError();

    const pass = e.target.querySelector('#pass').value;
    const pass2 = e.target.querySelector('#pass2').value;
};

const changePasswordWindow = (props) => {
    return (
        <form id="changePasswordForm" onSubmit={handlePasswordChange} action='/changePassword' method="POST">
            <label htmlFor="pass">New Password: </label>
            <input id="pass" type="password" name="pass" placeholder="New Password" />
            <label htmlFor="pass">Re-enter New Password: </label>
            <input id="pass2" type="password" name="pass2" placeholder="Re-enter New Password" />
            <input className="formSubmit" type="submit" value="Sign up" />
        </form>);
};

const init = () => {
    ReactDOM.render(<changePasswordWindow />, document.querySelector('#content'));
};

window.onload = init;