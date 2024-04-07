'use client'; 
import Link from 'next/link'
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';

const surveyJson = {
  elements: [
    { name: "FirstName", title: "Enter your first name:", type: "text" },
    { name: "LastName", title: "Enter your last name:", type: "text" }
  ]
};

function App() {
  const survey = new Model(surveyJson); 

  return(
    <div>
  <Link href="/">BACK</Link>
  <Survey model={survey} />
    </div>


   
  );
}

export default App; 
