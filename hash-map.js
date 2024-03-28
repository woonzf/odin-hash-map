import LinkedList from "./linked-list.js";

export default class HashMap {
    constructor() {
        this.capacity = 16;
        this.table = new Array(this.capacity).fill(null);
        this.loadFactor = 0.75;
        this.maxLoad = this.loadFactor * this.capacity;
        this.load = 0;
    }

    hash(key) {
        if (key === "") throw new Error("Missing key");
        if (typeof key !== "string") throw new Error("Key is not string");
        
        let hashCode = 0;
        const primeNumber = 7;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode %= this.capacity;
        }
    
        return hashCode;
    }

    set(key, value) {
        if (value === undefined) throw new Error("Missing value");

        const hashCode = this.hash(key);

        // Insert if bucket is empty
        if (this.table[hashCode] === null) {
            this.table[hashCode] = new LinkedList();
            this.table[hashCode].append({key, value});
            this.load += 1;

            // Grow table if exceeds load factor
            if (this.load > this.maxLoad) {
                this.resize();
            }

            return;
        }

        // Replace value if key exists
        const bucket = this.table[hashCode];
        const node = bucket.get(key);
        if (node !== null) node.replace(value);

        // Append linked list if collision
        else {
            bucket.append({key, value});
        }
    }

    get(key) {
        const hashCode = this.hash(key);
        const bucket = this.table[hashCode];
        if (bucket === null) return null;

        const node = bucket.get(key);
        if (node === null) return null;
        if (node.item.key === key) return node.item.value;
    }

    has(key) {
        const hashCode = this.hash(key);
        const bucket = this.table[hashCode];
        if (bucket === null) return false;
        return bucket.has(key);
    }

    remove(key) {
        const hashCode = this.hash(key);
        const bucket = this.table[hashCode];

        if (bucket === null || !bucket.remove(key)) return false;
        if (bucket.listHead === null) {
            this.table[hashCode] = null;
            this.load -= 1;
        }

        return true;
    }

    length() {
        return this.load;
    }

    clear() {
        this.table = new Array(this.capacity).fill(null);
        this.load = 0;
    }

    keys() {
        return this.getInfo("keys");
    }

    values() {
        return this.getInfo("values");
    }

    entries() {
        return this.getInfo("entries");
    }

    getInfo(att) {
        let arr = [];
        if (this.load === 0) return arr;

        let bucket = null;
        for (let i = 0; i < this.capacity; i++) {
            bucket = this.table[i];
            if (bucket !== null) arr.push(... bucket.keyValue(att));
        }

        return arr;
    }

    resize() {
        const oldCapacity = this.capacity;
        const oldHashMap = this.table;
        
        this.capacity = oldCapacity * 2;
        this.maxLoad = this.loadFactor * this.capacity;
        this.clear();

        for (let i = 0; i < oldCapacity; i++) {
            if (oldHashMap[i] !== null) {
                const entries = oldHashMap[i].keyValue("entries");
                for (const entry of entries) this.set(entry[0], entry[1]);
            }
        }
    }
}