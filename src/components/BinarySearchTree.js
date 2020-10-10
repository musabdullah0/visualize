import React, { useState } from 'react';
import './BinarySearchTree.css';

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    add(value) {
        function check(node) {
            if (node.value === value) {
                return;
            }
            if (node.value > value) {
                check(node.left = node.left || new Node(value));
                return;
            }
            if (node.value < value) {
                check(node.right = node.right || new Node(value));
            }
        }
        check(this.root = this.root || new Node(value));
    }

    // debugging method to show depth first search
    depthFirst() {
        let repr = ''
        function helper(node) {
            if (node) {
                let val = node.value
                repr += val.toString() + ' '
                helper(node.left)
                helper(node.right)
            }
        }
        helper(this.root)
        return repr
    }

}



function BinarySearchTree() {

    let tree = new Tree()
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(2);
    tree.add(4);
    tree.add(11);

    console.log(tree.depthFirst())

    return (
        <div>tree</div>
    );
}

export default BinarySearchTree;
