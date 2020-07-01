import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const FormUserDetails = ({nextStep, updateField, values}) => {

    function Continue (e){
        e.preventDefault();
        nextStep();
    };

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter Personal Details" />
                <TextField 
                    hintText="Enter your first name"
                    floatingLabelText="First Name"
                    name="firstName"
                    onChange={updateField}
                    defaultValue={values.firstName}
                />
                <br/>
                <TextField 
                    hintText="Enter your last name"
                    floatingLabelText="Last Name"
                    name="lastName"
                    onChange={updateField}
                    defaultValue={values.lastName}
                />
                <br/>
                <TextField 
                    hintText="Enter your email"
                    floatingLabelText="Email"
                    name="email"
                    onChange={updateField}
                    defaultValue={values.email}
                />
                <br/>
                <RaisedButton 
                    label="continue"
                    primary={true}
                    style={styles.button}
                    onClick={Continue}
                />
            </React.Fragment>
        </MuiThemeProvider>
    )
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails;
