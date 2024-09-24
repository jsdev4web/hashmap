
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

        console.log(this.length())
        let length = this.length()

        //let testequ = length / 16
        //console.log(testequ)

        if(length / 16 >= .75){

            console.log(length / 16)
            console.log("this works last node overwrite")
            arr.pop()
        }

        for(let i = 0; i < arr.length; i++){

            if(arr[i].key === key){
                arr[i].next = new Node(key, value)
                return arr
            } 
            
            else {
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

    length(){
        let arr = this.bucket
        let count = 0;
        for (let i = 0; i < arr.length; i++){
            
            if(arr[i].key){
                count++
            }

            if (arr[i].next !== null){
                count++
            }
        }
        return count
    }

    clear(){
        let arr = this.bucket
        arr = []
        return arr
    }

    keys(){
        let arr = this.bucket;

        let keyArr = []
        for(let i = 0; i < arr.length; i++){

            if(arr[i].next){
                let next = arr[i].next
                keyArr.push(next.key)
            }

            if(arr[i].key){
                keyArr.push(arr[i].key)
            }

        }
        return keyArr
    }

    values(){
        let arr = this.bucket;

        let valueArr = [];

        for(let i = 0; i < arr.length; i++){
            if(arr[i].next){
                let next = arr[i].next
                valueArr.push(next.value)
            }

            if(arr[i]){
                valueArr.push(arr[i].value)
            }
        }
        return valueArr
    }

    entries(){
        let arr = this.bucket;

        let valueArr = [];

        for (let i = 0; i < arr.length; i++){
            if(arr[i].next){
                valueArr.push(arr[i].next)
                console.log(arr[i].next)
            }

            if(arr[i]){
                valueArr.push(arr[i])
                console.log(arr[i])
            }
        }
       for(let i = 0; i < valueArr.length; i++){
            console.log("key:", valueArr[i].key, "value:", valueArr[i].value)
       }
    }

    loadFactor(){

        let arr = this.bucket
        let loadCount = 16;
        let count = 0;
        for (let i = 0; i < arr.length; i++){
            
            if(arr[i].key){
                count++
            }
            if (arr[i].next !== null){
                count++
            }
        }

        let currCount = count
        //console.log(currCount, "current count")

        let testNum = currCount / loadCount
        //console.log(testNum)

        if( currCount / loadCount >= .75 ){            
            console.log( "At load capacity ")
        }

        console.log("load factor ***16*** in progress")
        return true
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

//console.log(hash1.clear())

console.log(hash1.length())

console.log(hash1.keys())

console.log(hash1.values())

console.log(hash1.entries())


