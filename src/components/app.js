import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './main/main';
import Summary from './summary/summary';
import Form from './form/form';
import NotFound from './not-found/not-found';
import { FormDataProvider } from './hoc/form-data-provider';

export default function App() {
  const [summaryProps, setSummaryProps] = useState([]);
  return (
    <FormDataProvider>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route
          path='/create-summary'
          element={<Form summaryValuesHandler={setSummaryProps} />}
        />
        <Route path='/summary' element={<Summary values={summaryProps} />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </FormDataProvider>
  );
}
