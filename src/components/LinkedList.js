import React, { useState } from 'react';
import './LinkedList.css';

let init_linked_list = [1, 2, 3]

function Node(props) {
    return (
        <div className="node_container">
            <div className="node">
                {props.val}
            </div>
            <div className="arrow">
                &#8594;
            </div>
        </div>
    )
}

function NodeList(props) {
    return (
        <ul>
            {props.linked_list.map((number, i) =>
                <Node key={i} val={number} />
            )}
        </ul>
    )
}


function LinkedList() {

    const [linkedList, setLinkedList] = useState(init_linked_list)
    const [addVal, setAddVal] = useState(0)
    const [removeIndex, setRemoveIndex] = useState(0)
    const [getIndex, setGetIndex] = useState(0)

    return (
        <div className="container">
            <div className="linked_list">
                <NodeList linked_list={linkedList} />
            </div>
            <div className="controls">
                <div className="add">
                    <input name="addInput" type="text" inputMode="numeric" pattern="[0-9]*" onChange={e => setAddVal(parseInt(e.target.value))} />
                    <button onClick={() => setLinkedList([addVal, ...linkedList])}>add</button>
                </div>
                <div className="remove">
                    <input name="removeIndexInput" type="text" inputMode="numeric" pattern="[0-9]*" onChange={e => setRemoveIndex(parseInt(e.target.value))} />
                    <button onClick={() => setLinkedList(linkedList.slice(0, removeIndex).concat(linkedList.slice(removeIndex + 1, linkedList.length)))}>remove</button>
                </div>
                <div className="get">
                    <input name="getIndexInput" type="text" inputMode="numeric" pattern="[0-9]*" onChange={e => setGetIndex(parseInt(e.target.value))} defaultValue={0} />
                    <span>get = {getIndex < linkedList.length ? linkedList[getIndex] : 'invalid index'}</span>
                </div>
                <div className="size">size = <b>{linkedList.length}</b></div>
                {/* <div className="isEmpty">isEmpty = <b>{stack.length === 0 ? "True" : "False"}</b></div> */}
            </div>
        </div>

    );
}

export default LinkedList;
