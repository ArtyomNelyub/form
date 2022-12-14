import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './main/main';
import Summary from './summary/summary';
import Form from './form/form';
import NotFound from './not-found/not-found';
import { FormDataProvider } from './hoc/form-data-provider';
import { APP_ROUTE } from './const';

export default function App() {
  const [summaryProps, setSummaryProps] = useState([]);
  return (
    <FormDataProvider>
      <Routes>
        <Route path={APP_ROUTE.MAIN} element={<Main />} />
        <Route
          path={APP_ROUTE.CREATE_SUMMARY}
          element={<Form summaryValuesHandler={setSummaryProps} />}
        />
        <Route path={APP_ROUTE.SUMMARY} element={<Summary values={summaryProps} />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </FormDataProvider>
  );
}
