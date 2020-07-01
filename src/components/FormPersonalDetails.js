import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const FormPersonalDetails = ({nextStep, previousStep, updateField, values}) => {

    function Continue (e){
        e.preventDefault();
        nextStep();
    };

    function Previous (e){
        e.preventDefault();
        previousStep();
    };

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter User Details" />
                <TextField 
                    hintText="Enter your occupation"
                    floatingLabelText="Occupation"
                    name="occupation"
                    onChange={updateField}
                    defaultValue={values.occupation}
                />
                <br/>
                <TextField 
                    hintText="Enter your city"
                    floatingLabelText="City"
                    name="city"
                    onChange={updateField}
                    defaultValue={values.city}
                />
                <br/>
                <TextField 
                    hintText="Enter your Bio"
                    floatingLabelText="Bio"
                    name="bio"
                    onChange={updateField}
                    defaultValue={values.bio}
                />
                <br/>
                <RaisedButton 
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={Previous}
                />
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

export default FormPersonalDetails;
