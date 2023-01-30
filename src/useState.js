import { useState } from 'react';

const App = () => {
    const [myCounter, setMyCounter] = useState(0);

    return (
        <div onClick={() => setMyCounter(myCounter + 1)}>
            Count: {myCounter}
        </div>
    );
};