import { useState } from 'react';

import Summary from './summary/summary';
import Form from './form/form';
import NotFound from './not-found/not-found';

export default function App() {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [summaryProps, setSummaryProps] = useState([]);
  return (
   <NotFound />
    // <>
    //   {!isSummaryOpen && <Form summaryOpenHandler={setIsSummaryOpen} summaryValuesHandler={setSummaryProps}/>}
    //   {isSummaryOpen && <Summary values={summaryProps} summaryOpenHandler={setIsSummaryOpen}/>}
    // </>
  );
}
