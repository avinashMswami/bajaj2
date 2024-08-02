import React, { useState } from 'react';
import ApiForm from './ApiForm';
import ResponseDisplay from './ResponseDisplay';

const App = () => {
    const [response, setResponse] = useState(null);

    return (
        <div className="App">
            <ApiForm setResponse={setResponse} />
            {response && <ResponseDisplay response={response} />}
        </div>
    );
};

export default App;
