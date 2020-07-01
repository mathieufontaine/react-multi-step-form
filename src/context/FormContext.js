// import React, { createContext, useState } from 'react';


// const initialForm = {
//     information: [{
//         firstName: '',
//         lastName: '',
//         email: '',
//         occupation: '',
//         city: '',
//         bio: ''
//     }], step: { step: 0 },
// };

// export const FormContext = createContext(initialForm);

// const FormContextProvider = ({ children }) => {

// const [infos, setinfo] = useState(initialForm);
// const [editInfo, setEditInfo] = useState('');

// const findItem = (item) => {
//     const selectedItem = infos.find(info => info === item);
//     setEditInfo(selectedItem);
// }

// const editText = (text, item) => {
//     const updatedInfo = infos.map(info => (
//         (info === item) ? (text) : info
//     ));
//     setinfo(updatedinfo);
// }


// return (
//     <FormContext.Provider  value ={{informations: state.information, step: state.step, editText }}>
//         {children}
//     </FormContext.Provider>
//     )

// }

// export default FormContextProvider;