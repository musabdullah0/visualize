import React, { useState } from 'react';
import './Queue.css';

let initialQueue = [1, 2, 3]

function ListItems(props) {
    return (
        <ul>
            {props.queue.map((number, i) =>
                <li key={i} className="queueItem">{number}</li>
            )}
        </ul>
    )
}

function Queue() {

    const [queue, setQueue] = useState(initialQueue)
    const [enqueueVal, setEnqueueVal] = useState(0)
    const [dequeueVal, setDequeueVal] = useState('')

    return (
        <div className="container">
            <div className="queue">
                <ListItems queue={queue} />
            </div>
            <div className="controls">
                <div className="enqueue">
                    <input name="enqueueInput" type="text" inputMode="numeric" pattern="[0-9]*" onChange={e => setEnqueueVal(parseInt(e.target.value))} />
                    <button onClick={() => setQueue([...queue, enqueueVal])}>enqueue</button>
                </div>
                <div className="dequeue">
                    <button onClick={() => {
                        setDequeueVal(queue.length > 0 ? queue[0] : "NoSuchElementException")
                        setQueue(queue.slice(1))
                    }}>dequeue</button>
                    <div>lastDequeue: <b>{dequeueVal}</b></div>
                </div>
                <div className="peek">peek = <b>{queue.length > 0 ? queue[0] : "null"}</b></div>
                <div className="isEmpty">isEmpty = <b>{queue.length === 0 ? "True" : "False"}</b></div>
            </div>
        </div>

    );
}

export default Queue;
