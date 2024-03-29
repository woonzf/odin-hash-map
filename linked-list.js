import Node from './node.js';

export default class LinkedList {
    constructor() {
        this.listHead = null;
    }

    // Add new node
    append(item) {
        if (this.listHead === null) this.listHead = new Node(item);
        else {
            let current = this.listHead;
            while (current.nextNode !== null) current = current.nextNode;
            current.nextNode = new Node(item);
        }
    }

    // Get node
    get(key) {
        let current = this.listHead;

        while (current !== null) {
            if (current.item === key || current.item.key === key) return current;
            current = current.nextNode;
        }

        return null;
    }

    // Check if key exists
    contains(key) {
        if (this.get(key) !== null) return true;
        return false;
    }

    // Remove node
    remove(key) {
        let current = this.listHead;
        let prev = null;

        while (current !== null) {
            if (current.item === key || current.item.key === key) {
                if (prev === null) this.listHead = this.listHead.nextNode;
                else prev.nextNode = current.nextNode;
                return true;
            }

            prev = current;
            current = current.nextNode;
        }

        return false;
    }

    // Get keys, values or entries
    keyValue(att) {
        let current = this.listHead;
        let arr = [];

        while (current !== null) {
            const item = current.item;
            if (att === "set") arr.push(item);
            else if (att === "keys") arr.push(item.key);
            else if (att === "values") arr.push(item.value);
            else if (att === "entries") arr.push([item.key, item.value]);
            current = current.nextNode;
        }

        return arr;
    }

    // if (index < 0 || index >= buckets.length) {
    //     throw new Error("Trying to access index out of bound");
    // }
}