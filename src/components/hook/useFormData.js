import { useContext } from 'react';
import { FormDataContext } from '../hoc/form-data-provider';

export function useFormData() {
  return useContext(FormDataContext);
}
