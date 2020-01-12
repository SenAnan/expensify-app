import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info} </p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info - please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthenication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenicated ? <WrappedComponent {...props} /> : <p>You need to log in to view info</p> }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthenication(Info);

ReactDOM.render(<AuthInfo isAuthenicated={false} info="These are the details" />, document.getElementById('app'));