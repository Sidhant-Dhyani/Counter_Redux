import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = React.useState();

    const handleInputChange = (e) => {
        setInputValue(parseInt(e.target.value));
    }

    return (
        <div>
            <button aria-label='Increment' onClick={() => dispatch(increment())}>Increment</button>
            <h1>{count}</h1>
            <h1>{inputValue}</h1>
            <button aria-label='Decrement' onClick={() => dispatch(decrement())}>Decrement</button>
            <div>
                <input type="number" value={inputValue} onChange={handleInputChange} />
                <button onClick={() => dispatch(incrementByAmount(inputValue))}>Add Amount</button>
            </div>
        </div>
    )
}

export default Counter;