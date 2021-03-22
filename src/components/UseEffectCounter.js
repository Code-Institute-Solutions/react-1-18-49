import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('count 1 effect');
        document.title = count;
    }, [count]);
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>
        </div>
    )
}

export default UseEffectCounter
