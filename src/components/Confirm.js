import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


const FormPersonalDetails = ({nextStep, previousStep, values}) => {

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
                <AppBar title="Confirm User Details" />
                <List >
                    <ListItem 
                        primaryText="First Name"
                        secondaryText={values.firstName}
                    />
                    <ListItem 
                        primaryText="Last Name"
                        secondaryText={values.lastName}
                    />
                    <ListItem 
                        primaryText="Email"
                        secondaryText={values.email}
                    />
                    <ListItem 
                        primaryText="Occupation"
                        secondaryText={values.occupation}
                    />
                    <ListItem 
                        primaryText="City"
                        secondaryText={values.city}
                    />
                    <ListItem 
                        primaryText="Bio"
                        secondaryText={values.bio}
                    />                                                                                
                </List>
                <RaisedButton 
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={Previous}
                />
                <RaisedButton 
                    label="confirm"
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
