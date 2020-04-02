Binary Search Tree - insert
Objectives:
Create a binary search tree and be able to add nodes with an insert method.
Be able to create instances of binary search trees to test all BST algorithms upon.
It is very possible that when you are applying for jobs, you will be asked about Binary Search Trees! Although it is unlikely that you will need to implement a BST for any projects you build, familiarity with all data structures is a key part of being a software engineer. The logic and problem solving techniques that you hone while working with data structures will directly improve your ability to debug problems you come across while building your applications. Interviewers often use these data structures to assess your ability to solve problems.

As you study your data structures, always run your code! It is excellent practice to try solving algorithms on a whiteboard or on paper, but that is just one part of the process. The next step is to test your code! 

Let's say that you were given a challenging BST problem, such as removing a node from a BST. You may write the code absolutely perfectly, but how would you know that for sure? You would have to test the code on an existing BST. Therefore, you would first need to create an instance of a BST and add nodes to it. 

Let's get started and add an insert method to the BST prototype. It will add a node that has the value that a user provides. 

For example, let's say we have an instance of a binary search tree called "first", but it does not contain any nodes yet. Calling first.insert(30) would assign first's root attribute to a node that has 30 as its value. Then, calling first.insert(20) would assign the left attribute of the root node to a node that has 20 as its value.

Test your code by creating an instance of a BST that has at least ten nodes that were added using the insert method. Make sure the nodes are placed where they are supposed to go by logging the BST in the console.

BONUS: Make it possible to chain the insert method. For example, we should be able to call first.insert(50).insert(40).