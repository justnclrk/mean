Binary Search Tree - traversal
Objectives:
Be able to log all the values in a binary search tree.

When we want to see what values we have in a binary search tree, we could simply log the tree in our console. However, then we see a lot of nested objects, as seen in this screen shot:

--picture--

It takes some time to figure out, but eventually we can see that what we have is a BST that can be represented in this manner:

--picture2--

It would be so much easier if we could just traverse the BST and log the values within it in an ordered manner. However, with a BST, what does it mean to print the values in an ordered manner? We could start at the root node, but then which way should we go, left or right? Or should we start with the leaf nodes? 

There are actually three methods to traverse a BST that are commonly used. These are called in-order, pre-order, and post-order. Pre- and post-order refer to when a node is logged compared to its children. If the node is logged before its children, it is pre-order. If the node is logged after its children, it is post-order. In-order refers to when the nodes are logged according to the order of their values. Using the above tree as an example, these would be the results of the different traversals:

Pre-order: 40, 20, 25, 50
Post-order: 25, 20, 50, 40
In-order: 20, 25, 40, 50
For this assignment, implement all three traversals.