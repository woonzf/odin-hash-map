# Hash Map
### Description:
Solution for Project: HashMap of The Odin Project's Javascript Course
- A program which contains HashMap, HashSet and LinkedList algorithm

    ### HashMap
    Function  | Description
    ------------- | -------------
    hash(key) | return a hashed keycode
    set(key, value) | insert, replace or append item with key and value into hash table
    get(key) | return the value of the item with key
    has(key) | check if node with key exists in the hash table
    remove(key) | remove the node with key from the hash table
    length() | return the length of the hash table
    clear() | empty the hash table
    keys() | return an array of keys in the hash table
    values() | return an array of values in the hash table
    entries() | return an array of [key, value] in the hash table
    getInfo(att) | return an array of items based on att
    resize() | resize the hash table and re-set() existing items

    ### HashSet
    Function  | Description
    ------------- | -------------
    hash(key) | return a hashed keycode
    add(key) | insert or append key into hash table
    has(key) | check if key exists in the hash table
    remove(key) | remove key from the hash table
    length() | return the length of the hash table
    clear() | empty the hash table
    keys() | return an array of keys in the hash table
    resize() | resize the hash table and re-add() existing keys

    ### LinkedList
    Function  | Description
    ------------- | -------------
    append(item) | insert new node with item at the tail
    get(key) | return node with key
    contains(key) | check if node with key exists in linked list
    remove(key) | remove the node with key
    keyValue(att) | return an array of items based on att

    ### Node
    Function  | Description
    ------------- | -------------
    replace(value) | replace item value

### Instruction:
1. To run the program inside the terminal, make sure Node.js is installed in your system
2. Enter the line below into the terminal to run <b><i>index.js</i></b>:

        node [path to file]
    If the current directory is the same as the files:

        node index.js