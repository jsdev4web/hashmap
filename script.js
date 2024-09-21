
class Node {
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null
    }
}

class hashMap {
    constructor(node){
        this.node = null
        this.bucket = []

    }

    hash(key){
        let hashCode = 0;

        let primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode
    }

    set(key, value){

        let arr = this.bucket;
        let node = this.node

        if(arr.length === 0){
            node = new Node(key, value)
            arr.push(node)
            return arr
        }

        for(let i = 0; i < arr.length; i++){
            console.log(arr[i].key)
            if(arr[i].key === key){
                arr[i].value = value
                return arr
            } else {
                node = new Node(key, value);
                arr.push(node);
                return arr
                }
        }
    }

}

let hash1 = new hashMap()
console.log(hash1.hash("house"))

console.log(hash1.set("eat", "apples"))

console.log(hash1.set("drink", "beer"))

console.log(hash1.set("eat", "pears"))






