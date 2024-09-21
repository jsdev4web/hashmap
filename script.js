
class hashMap {
    constructor(){

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
        let keyValue = new Map();
        keyValue.set(key, value);
        return keyValue.get(key);
    }

}

let hash1 = new hashMap()
console.log(hash1.hash("house"))
console.log(hash1.set("eat","apples"))