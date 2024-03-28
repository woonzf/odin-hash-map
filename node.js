export default class Node {
    constructor(item) {
        this.item = item;
        this.nextNode = null;
    }

    replace(value) {
        this.item.value = value;
    }
}