class set {


    constructor(){
        this.collection = [];
    }

    

    add(item){

        if(!this.has(item)){
            this.collection.push(item);
            return this.collection;
        }else{
            console.log("Item is already present");
        }

    }

    remove(item){

        if(this.has(item)){
            let index = this.collection.indexOf(item);
            let removedItem = this.collection.splice(index,1);
            return removedItem;
        }else{
            console.log("Item not present");
        }

    }

    has(item){
        return (this.collection.indexOf(item) !== -1);
    }

    size(){
        return this.collection.length;
    }


    getItems(){
        return this.collection;
    }

    union(mergingSet){

        let unionSet = new set();
        let currentSet = this.getItems();
        let mergeSet = mergingSet.getItems();
        currentSet.forEach(item => {
            unionSet.add(item);  
        });

        mergeSet.forEach(item =>{
            unionSet.add(item);
        });
        return unionSet;

    }

    intersection(mergingSet){

        let intersectionSet = new set();
        let currentSet = this.getItems();
        currentSet.forEach(item=>{
            if(mergingSet.has(item)){
                intersectionSet.add(item);
            }
        });
        return intersectionSet;
    }

    isSubSet(mergingSet){

        let currentSet = this.getItems();
        return currentSet.every(item=>mergingSet.has(item));

    }


}


const mySet = new set();
const nextSet = new set();

console.log(mySet.add(1));
console.log(mySet.add(2));
console.log(mySet.add(3));
console.log(mySet.add(1));
console.log(mySet.add(6))

console.log(nextSet.add(1));
console.log(nextSet.add(2));
console.log(nextSet.add(3));
console.log(nextSet.add(4));




console.log(mySet.remove(3));
console.log(mySet.remove(5));
console.log(mySet.size(),"Size of a collection");
console.log(mySet.union(nextSet).getItems(), "union");
console.log(mySet.intersection(nextSet).getItems(), "intersection");
console.log(mySet.isSubSet(nextSet), "isSubSet");