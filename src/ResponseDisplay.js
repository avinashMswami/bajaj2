import React, { useState } from 'react';

const ResponseDisplay = ({ response }) => {
    const [visibleSections, setVisibleSections] = useState({
        characters: true,
        numbers: true,
        highestAlphabet: true,
    });

    const toggleVisibility = (section) => {
        setVisibleSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div>
            <h2>Response</h2>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={visibleSections.characters}
                        onChange={() => toggleVisibility('characters')}
                    />
                    Characters
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={visibleSections.numbers}
                        onChange={() => toggleVisibility('numbers')}
                    />
                    Numbers
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={visibleSections.highestAlphabet}
                        onChange={() => toggleVisibility('highestAlphabet')}
                    />
                    Highest Alphabet
                </label>
            </div>
            {visibleSections.characters && response.alphabets && (
                <div>
                    <h3>Characters</h3>
                    <p>{response.alphabets.join(', ')}</p>
                </div>
            )}
            {visibleSections.numbers && response.numbers && (
                <div>
                    <h3>Numbers</h3>
                    <p>{response.numbers.join(', ')}</p>
                </div>
            )}
            {visibleSections.highestAlphabet && response.highest_alphabet && (
                <div>
                    <h3>Highest Alphabet</h3>
                    <p>{response.highest_alphabet}</p>
                </div>
            )}
        </div>
    );
};

export default ResponseDisplay;
