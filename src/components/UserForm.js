import React, {useState} from 'react'
// import { FormContext } from '../context/FormContext';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

const UserForm = () => {

    // const { informations, step, editText } = useContext(FormContext);
    const [form, setState] = useState({
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            bio: ''
    });

    const [step, setStep] = useState(1)

    const {firstName, lastName, email, occupation, city, bio} = form;
    const values = {firstName, lastName, email, occupation, city, bio};


    const updateField = e => {
        setState({
          ...form,
          [e.target.name]: e.target.value
        });
      };

    function nextStep() {
        setStep(step + 1);
      }

    function previousStep() {
        setStep(step - 1);
      }


    switch (step){
        case 1:
            return(
                <FormUserDetails 
                    nextStep={nextStep} 
                    updateField={updateField} 
                    values={values} />
            )
        case 2:
            return (
                <FormPersonalDetails 
                    nextStep={nextStep} 
                    previousStep={previousStep} 
                    updateField={updateField} 
                    values={values} />
            ) 
        case 3:
            return(
                <Confirm 
                    nextStep={nextStep} 
                    previousStep={previousStep} 
                    values={values} />
            )
        case 4:
            return(
                <Success />
            )
    }



    return (
        <div>
            
        </div>
    )
}

export default UserForm
