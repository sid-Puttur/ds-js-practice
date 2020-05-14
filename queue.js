
class queue {


    constructor(){

        this.collection = [];
    }


    enqueue(item){

        return this.collection.push(item);

    }

    dequeue(){

      return this.collection.shift();

    }

    print(){

        console.log(this.collection);
        return;

    }

    front(){

        return this.collection[0];

    }

    size(){

        return this.collection.length;

    }

    isEmpty(){

        return (this.collection.length === 0)?true:false;

    }


}


const myQueue = new queue();

console.log(myQueue.enqueue(10));
console.log(myQueue.enqueue(20));
console.log(myQueue.enqueue(5));
console.log(myQueue.front());

myQueue.print();
console.log(myQueue.dequeue());
console.log(myQueue.size());
console.log(myQueue.front());
console.log(myQueue.dequeue());
console.log(myQueue.size());
console.log(myQueue.front());




class priorityQueue {


    constructor(){

        this.collection = [];

    }


    enqueue(item){

        if(this.collection.length === 0){
           return  this.collection.push(item);
        }else{

            let isAdded = false;
            for(let i = 0; i <  this.collection.length; i++){
                if(item[1] < this.collection[i][1]){
                    this.collection.splice(i,0,item);
                    isAdded = true;
                    break;
                }

            }
            if(!isAdded){
                this.collection.push(item);
            }
           return this.collection;

        }

    }


    dequeue(){

        return this.collection.shift();
    }

    front(){

        return this.collection[0];

    }



}


const pqueue = new priorityQueue();


console.log(pqueue.enqueue(['hai',2]),"pqueue.enqueue");
console.log(pqueue.enqueue(['hello',4]),"pqueue.enqueue");
console.log(pqueue.enqueue(['jo',1]),"pqueue.enqueue");
