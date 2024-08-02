import React, { useState } from 'react';
import axios from 'axios';

const ApiForm = ({ setResponse }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const jsonInput = JSON.parse(input);
            const response = await axios.post('https://bajaj-82iv.onrender.com/bfhl', jsonInput);
            setResponse(response.data);
            setError('');
        } catch (err) {
            setError('Invalid JSON or API error');
        }
    };

    return (
        <div>
            <h1>{'RA2111003020529'}</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Enter JSON here...'
                    rows="4"
                    cols="50"
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ApiForm;
