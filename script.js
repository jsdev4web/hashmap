
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
            //console.log(arr[i].key)
            if(arr[i].key === key){
                arr[i].next = new Node(key, value)
                return arr
            } else {
                node = new Node(key, value);
                arr.push(node);
                return arr
                }
        }
    }

    get(key){
        let arr = this.bucket;
        console.log(key, " : for get(key)")
    
        for (let i = 0; i < arr.length; i++){
                
            if(arr[i].key === key ){
    
                return key
            } 
        }
        return null
    }

    has(key){
        let arr = this.bucket;

        for (let i = 0; i < arr.length; i++){
            if(arr[i].key === key){
                return true
            } 
        } 
        return null
    }

    remove(key){
        let arr = this.bucket

        for (let i = 0; i < arr.length; i++){
            if(arr[i].key === key){
                console.log()
                arr.splice(i, i + 1)
                console.log(arr)
                return true
            }
        }
        
        return false
    }

}

let hash1 = new hashMap()
console.log(hash1.hash("house"))

console.log(hash1.set("eat", "apples"))

console.log(hash1.set("drink", "beer"))

console.log(hash1.set("eat", "pears"))

console.log(hash1.get("loop"))

console.log(hash1.has("beet"))

console.log(hash1.remove("looms"))








