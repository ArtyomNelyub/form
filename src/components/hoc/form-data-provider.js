import { createContext, useState } from 'react';

export const FormDataContext = createContext(null);

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState([]);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
