import React from 'react';
import Eightball from './Eightball';
import answerData from './answers';

function App() {
    return (
        <div>
            <Eightball answers={answerData} />
        </div>
    );
}

export default App;
