Binary Search Trees
Objectives:
Use object oriented programming to implement a binary search tree.
Practice for technical interviews.

The Binary Search Tree is a data structure made of up objects that point to each other. Much like Singly Linked Lists, objects that we call nodes contain our data as well as pointers to other nodes.

The binary search is a powerful way to search data that is already organized. With each iteration of a binary search, the amount of data that we have to search is reduced by half. A binary search tree is not sorted perfectly, but it is organized enough so that with each iteration of our search, we reduce the amount of the tree left to search by half.

How is this done? Each node that we place in a binary search tree may have up to two children. The left child must be a node that has a value that is less than the parent node's value. The right child must be a node that has a value that is greater than the parent node's value. Just as a singly linked list has a head, which points to the first node in the list, a binary search tree needs a pointer to indicate the start of the tree! We call this the root. 

(Note: binary search trees are often implemented to not allow duplicate values. If you have a need to store duplicate values in your binary search tree, you may decide whether values of equal value should go to the left or to the right. At Coding Dojo, we generally put values of equal value to the right.)

These are our basic object constructors:

function BST(){
    this.root = null;    // the root attribute will be assigned to a node later
}
function Node(val){
    this.value = val;   // the value attribute will be assigned based on user input when a node is instantiated
    this.left = null;   // the left attribute will be assigned to a node later
    this.right = null;  // the right attribute will be assigned to a node later
}
In order to make an instance of a binary search tree, we'll need to invoke the BST object constructor. Don't forget the new keyword! We can then instantiate a node and assign it to the tree's root attribute. However, this would be incredibly tedious to do for very long. It would be much better to write an insert method that we can call upon to add our nodes for us!

var first = new BST();      // make an instance of a BST and store it in a variable
first.root = new Node(30);  // assign our instance's root attribute to an instance of a node
                           // but wouldn't it be nicer to be able to call a method that would do this for us?