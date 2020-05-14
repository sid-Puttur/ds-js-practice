

class stack {


    /** For dynamic stack, remove the size */
    
    constructor(size){

        console.log("inside constructor and size is", size)
        this.itemList = new Array(size);
        this.counter = 0;
        this.totalSize = size;
    }


    add(item){

        /** For dynamic stack, remove the if condition */
        if(this.counter === this.totalSize){
            return "Stack is full"
        }
        this.itemList[this.counter] = item;
        this.counter++;
        return this.itemList;

    }


    remove(){

        if(this.counter === 0){
            return "Stack is empty"
        }
        this.counter--;
        let deletedItem = this.itemList[this.counter];
        delete this.itemList[this.counter];
        return deletedItem;


    }

    getTotalItem(){

        return this.counter;

    }


    getPeek(){

        return this.itemList[this.counter-1];

    }



}


const cart = new stack(5);

 let addData = cart.add(1);
 addData = cart.add(2);
 addData = cart.add(3);
 addData = cart.add(4);
 addData = cart.add(5);
 let stackPeek = cart.getPeek();

console.log(cart.getTotalItem(),"Items list before popping");
console.table(addData);
console.log(stackPeek,"stackPeek");
console.log(cart.remove(),"removed Item");
console.log(cart.getPeek(),"stackPeek after popping");
console.log(cart.getTotalItem(),"Items list after popping");
