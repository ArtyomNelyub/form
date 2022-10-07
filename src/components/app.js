import { useState } from 'react';
import Summary from './summary';
import Form from './form';

export default function App() {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [summaryProps, setSummaryProps] = useState([]);
  return (
    <>
      {!isSummaryOpen && <Form summaryOpenHandler={setIsSummaryOpen} summaryValuesHandler={setSummaryProps}/>}
      {isSummaryOpen && <Summary values={summaryProps} summaryOpenHandler={setIsSummaryOpen}/>}
    </>
  );
}
