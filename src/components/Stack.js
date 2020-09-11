import React, { useState } from 'react';
import './Stack.css';

let initialStack = [1, 2, 3]

function ListItems(props) {
    return (
        <ul>
            {props.stack.map((number, i) =>
                <li key={i} className="stackItem">{number}</li>
            )}
        </ul>
    )
}

function Stack() {

    const [stack, setStack] = useState(initialStack)
    const [pushVal, setPushVal] = useState(0)
    const [popVal, setPopVal] = useState('')

    return (
        <div className="container">
            <div className="stack">
                <ListItems stack={stack} />
            </div>
            <div className="controls">
                <div className="push">
                    <input name="pushInput" type="text" inputMode="numeric" pattern="[0-9]*" onChange={e => setPushVal(parseInt(e.target.value))} />
                    <button onClick={() => setStack([pushVal, ...stack])}>push</button>
                </div>
                <div className="pop">
                    <button onClick={() => {
                        setPopVal(stack.length > 0 ? stack[0] : "EmptyStackException")
                        setStack(stack.slice(1))
                    }}>pop</button>
                    <div>lastPop: <b>{popVal}</b></div>
                </div>
                <div className="peek">peek = <b>{stack.length > 0 ? stack[0] : "EmptyStackException"}</b></div>
                <div className="isEmpty">isEmpty = <b>{stack.length === 0 ? "True" : "False"}</b></div>
            </div>
        </div>

    );
}

export default Stack;
