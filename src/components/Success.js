import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


const Success = () => {

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter Personal Details" />
                <h1>
                Your subscription has been submited.
                </h1>
                <p>We will be in touch soon. Thank you very much</p>
            </React.Fragment>
        </MuiThemeProvider>
    )
}

export default Success;
