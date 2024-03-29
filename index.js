import HashMap from "./hash-map.js";
import HashSet from "./hash-set.js";

function testMap() {
    const hashMap = new HashMap();

    hashMap.set("Luna", 2);
    hashMap.set("Ginny", 1);
    hashMap.set("Harry", 4);
    hashMap.set("Luna", 3);
    hashMap.set("Ginny", 5);
    hashMap.set("Hagrid", 6);
    hashMap.set("Snape", 7);
    hashMap.set("Albus", 8);
    hashMap.set("Ron", 9);
    hashMap.set("Lily", 10);
    hashMap.set("James", 11);
    hashMap.set("Neville", 12);
    hashMap.set("Bellatrix", 13);
    hashMap.set("Voldemort", 14);
    hashMap.set("Dobby", 15);
    hashMap.set("McGonagall", 16);
    hashMap.set("Fred", 17);
    hashMap.set("George", 18);
    hashMap.set("Malfoy", 19);
    hashMap.set("Lucius", 20);
    hashMap.set("Bill", 21);
    hashMap.set("Fleur", 22);
    hashMap.set("Grindelwald", 23);
    hashMap.set("A", 24);
    hashMap.set("B", 25);

    console.log(hashMap.get("Luna")) // 3
    console.log(hashMap.get("Hermione")) // null
    console.log(hashMap.has("Luna")) // true
    console.log(hashMap.has("Hermione")) // false
    console.log(hashMap.remove("Ginny")) // true
    console.log(hashMap.remove("Hagrid")) // true
    console.log(hashMap.remove("Hagrid")) // false
    console.log(hashMap.length()) // 16
    console.log(hashMap.keys()) // [ 'Luna', ... ]
    console.log(hashMap.values()) // [ 3, ... ]
    console.log(hashMap.entries()) // [ [ 'Luna', 3 ], ... ]
    console.log(hashMap.table)
}

function testSet() {
    const hashSet = new HashSet();

    for (let i = 0; i < 100; i++) {
        hashSet.add(`key${i}`);
    }

    console.log(hashSet.has("key11")) // true
    console.log(hashSet.has("key999")) // false
    console.log(hashSet.remove("key76")) // true
    console.log(hashSet.remove("key30")) // true
    console.log(hashSet.remove("key30")) // false
    console.log(hashSet.length()) // 23
    console.log(hashSet.keys()) // [ 'key0', ... ]
    console.log(hashSet.table)
}

testMap();
testSet();