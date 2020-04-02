Binary Search Tree - depth
Objectives:
Consider how the arrangement of nodes in a tree affects its efficiency.
Determine the depth of a binary search tree.
You may have already realized that not all binary search trees are equivalent. The arrangement of the nodes in the tree has a real effect on its efficiency. Depending on how we insert nodes into a BST, they could be arranged so that lots of non-leaf nodes have only one child. We could think of this as a spindly tree with lots of empty space between the branches. On the other hand, we could arrange the tree so that all nodes but the leaf nodes have two children. This would result in a "bushy" tree. 

A tree's depth is the length from the root to the farthest leaf (including both the root node and the leaf node in the count). If we arrange our nodes so that there are many with only one child, this would give our tree more depth. The more depth our tree has, the longer our searches would take. BSTs are more efficient when there are more forks, meaning that the tree is shallow and full.

Using prototype, give your binary search trees a method that would give us an idea of the longest search we have by returning the depth of the tree.