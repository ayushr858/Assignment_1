import React, { useState, useEffect } from 'react'
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0)

    function decrement() {
        setCount(preVal => preVal-1)
    }

    function increment() {
        setCount(preVal => preVal+1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(preVal => preVal+1)
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [])

    return(
        <>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </>
    )
}

export default Counter