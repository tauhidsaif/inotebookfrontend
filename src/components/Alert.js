import React from 'react';

const Alert = (props) => {
    return <div style={{ height: '80px' }} >

            {props.alert && <div className={`alert  alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                {props.alert.message}
            </div>}
    </div>;
};

export default Alert;
