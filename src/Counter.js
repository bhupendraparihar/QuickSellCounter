import React, { useContext, useEffect, useState } from 'react'
import { CountContext } from './Context'
import axios from 'axios';

const Counter = ({count = 1, max = 1000}) => {
    
    const [value, setValue] = useContext(CountContext);
    const [saving, setSavingState] = useState(false);

    useEffect(() => {
        setValue({
            count: count
        });

    },[count, setValue]);

    useEffect(() => {
        if (value.count) {
            updateCounter(value.count);
        }
    }, [value.count]);

    const updateCounter = (count) => {
        setSavingState(true);
        const baseURL = 'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json';
        axios.put(baseURL, {
            rollNumber: count
        }).then((response) => {
            setSavingState(false);
            console.log('value updated', response.data);
        })
        .catch(error => {
            setSavingState(false);
            console.log(error);
        })
    }

    const incrementCounter = () => {
        if (value.count < max) {
            setValue({
                count: +value.count + 1
            });
        }
    }

    const decrementCounter = () => {
        setValue({
            count: +value.count - 1
        });
    }

    const changeCount = (e) => {
        setValue({ count: e.target.value })
    }

    const style = {
        button: {
            fontSize: "20px",
            color: "brown",
            background: "none",
            height: "50px",
            width: '50px',
            padding: "0",
            border: "none",
        },
        container: {
            border: "1px solid brown",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center"
        },
        input: {
            fontSize: "20px",
            border: "none",
            color: "brown",
            backgroundColor: "#e6bb9e",
            borderColor: "brown",
            width: '50px',
            height: "51px",
            textAlign: "center",
            padding: "0"
        },
        saveCounterLabel: {
            marginBottom: "10px"
        }
    }

    return (
        <div>
            {saving && <div style={style.saveCounterLabel}>Saving counter value</div>}
        <div style={style.container}>
            
            <button style={style.button}
                onClick={decrementCounter}>-</button>
            <input type="text"
                style={style.input}
                name="count"
                value={value.count}
                placeholder={value.count}
                onChange={changeCount} />
            <button style={style.button}
                onClick={incrementCounter}>+</button>
        </div>
        </div>
    )
}

export default Counter
