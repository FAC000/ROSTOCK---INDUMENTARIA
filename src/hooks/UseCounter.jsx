import { useState } from "react";

export const UseCounter = (minValue = 0, maxValue = 1, step = 1) => {

    const [count, setCount] = useState(minValue)

    const incrementar = () => {
        if (count + step <= maxValue) {
            setCount(count + step)
        }
    }
    
    const decrementar = () => {
        if (count - step >= 1) {
            setCount(count - step)
        }
    }

    const reset = () => {
        setCount(1)
    }

    return {count, incrementar, decrementar, reset}

}





