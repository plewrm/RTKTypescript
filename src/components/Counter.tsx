import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../state/store'
import { decrement, increment,incrementMax,incrementAsync } from '../state/slices/counterSlice'
const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()
    const handleAdd = () => {
        // dispatch(increment())
        // dispatch(incrementMax(10))
        dispatch(incrementAsync(10))
    }
    const handleDelete = () => {
        dispatch(decrement())
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Counter
