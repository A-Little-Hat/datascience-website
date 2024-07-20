import React, { useState } from 'react';
import Nlp from './components/Nlp';
import Vision from './components/Vision';

function App() {
  const [selectedComponent, setSelectedComponent] = useState('NLP');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="mb-4">
        <button
          onClick={() => setSelectedComponent('NLP')}
          className={`px-4 py-2 m-2 ${
            selectedComponent === 'NLP' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          } rounded`}
        >
          NLP
        </button>
        <button
          onClick={() => setSelectedComponent('CV')}
          className={`px-4 py-2 m-2 ${
            selectedComponent === 'CV' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          } rounded`}
        >
          Computer Vision
        </button>
      </div>
      <div className="p-4 bg-white rounded shadow-md w-1/2">
        {selectedComponent === 'NLP' ? <Nlp /> : <Vision />}
      </div>
    </div>
  );
}

export default App;

