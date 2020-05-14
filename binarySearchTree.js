

class Node {
    
    constructor(data, left=null, right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}


class BST {


    constructor(){
        this.root = null;
    }


    add(item){

        const node = this.root;

        /* If Root node is null create a node at root */

        if(node === null){
            this.root = new Node(item);
        }else{
            return this.searchTree(node, item); /* Call a searchTree function to insert an item 
                                                    at either left or right node */
        }
        
    }


    searchTree(node, item){

        if(item < node.data){

            if(node.left === null){
                node.left = new Node(item);
                return;
            }else if(node.left !== null){
                return this.searchTree(node.left, item);
            }

        }else if(item > node.data){

            if(node.right === null){
                node.right = new Node(item);
                return;
            }else if(node.right !== null){
                return this.searchTree(node.right, item);
            }

        }else{
            return null;
        }

    }


    findMax(){
        
        let node = this.root;
        if(node === null){
            return null;
        }
        while(node.right !== null){
                node = node.right;
        }
        return node.data;
    }


    findMin(){

        let node = this.root;
        if(node == null){
            return null;
        }
        while(node.left !== null){
            node = node.left;
        }
        return node.data;

    }

    remove(item){

        this.root = this.removeNode(this.root, item);
        return this.root;

    }


    removeNode(node, item){

        if(node === null){
            return null;
        }
        if(item === node.data){

            if(node.left === null && node.right === null){
                return null;
            }

            if(node.left === null){
                return node.right
                
            }

            if(node.right === null){
                return node.left;
            }

            let tempNode = node.right;

            while(tempNode.left !== null){
                tempNode = tempNode.left;
            }

            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;

        }else if(item < node.data){

            node.left = this.removeNode(node.left, item)
            return node;

        }else if(item > node.data){

            node.right = this.removeNode(node.right, item)
            return node;

        }else{
            return null;
        }

    }



    find(item){

        let node = this.root;
        if(node === null){
            return null;
        }
        while(node.data !== item){
            if(item < node.data){
                node = node.left;
            } else{
                node = node.right;
            }

            if(node === null){
                return null;
            }
        }
        return node;
    
    }


    isPresent(item){

        let node = this.root;
        if(node === null){
            return node;
        }
        while(node){

            if(item === node.data){
                return true;
            }

            if(item < node.data){
                node = node.left
            }else{
                node = node.right;
            }
        }
       return false;

    }

}


const bst  = new BST();
bst.add(10);
bst.add(5);
bst.add(8);
bst.add(100);
bst.add(18);
bst.add(16);
console.log(bst.findMax());
console.log(bst.findMin());
console.log(bst.find(10));
console.log(bst.isPresent(20));
console.log(bst.remove(5));
console.log(bst.findMin());
console.log(bst.remove(100));
console.log(bst.findMax());


