Heaps
Objectives:
Understand what a heap is and its benefits.
A heap is a collection of values that is somewhat ordered. We could order them so that the maximum value is always easily available (a max heap) or we could make the minimum value easily available (min heap). For these exercises, we will be making min heaps, but the logic could easily be adjusted to create max heaps.

Although a heap is actually an array, we visualize them as trees! This is just to help us think about how the data should be organized in the array. Diagrams similar to the one below often refer to data structures composed of objects, so we want to emphasize now that heaps are arrays. By visualizing them as trees, though, we can more easily understand where we should place our values in the array.


--picture--

Min heap
Follow these guidelines when making a min heap:

Visualize the minimum value as being at the top of the tree. (A max heap would put the maximum value at the top).
Each element may have up to two children.
Children elements must be greater than their parent element. However, there are no rules about how children should be placed relative to each other. For example, the smaller of the two children could be to the left or to the right.
There are no holes in a heap. Visualize heaps as being filled from top to bottom and left to right. An element cannot have children until all the elements to the left and above have two children each.
The tree is just a way to visualize the different indices of an array. The top of the tree is index 1. The next layer contains indices 2 and 3. The third layer contains indices 4, 5, 6, and 7, and so forth.
Do not use index 0 when making a heap!
When we look at the diagram of our heap, we can notice a pattern. If we know the index of a parent element, we should be able to easily locate the children elements with simple math! The first child's index is twice the parent's index, and the second child's index is twice the parent's index plus 1.

child1_index = parent_index * 2
child2_index = parent_index * 2 + 1copy
Likewise, if we know the index of a child element, we should be able to easily locate the parent! Just divide the child's index by 2 and eliminate any decimal that may result.

parent_index = Math.trunc(child_index / 2)
Of course, this math would not work if we were using index 0, which is why we may not use that space in the array.

As you can see in the diagram above, the array is not sorted. However, we do not need it to be sorted. We are only interested in keeping the minimum value at index 1. The rest of the heap is organized just enough so that we may keep the minimum value at index 1 with little effort.

Adding to a min heap
Using the min heap given above, let's say that we wanted to add the number 18 to our heap. Since it's an array, we can easily add it to the array using the .push() method, which would place it at index 11. Then, we only need to ask ourselves if it is following the rules of the min heap - in other words, is our added value greater than its parent? 18 is greater than 16, so we're done! We successfully added the 18 to our heap.

However, let's say we wanted to add the number 1 to our heap, not the 18. At that point, 1 is not greater than the parent, 16, so what we need to do is "swim up" the 1. We do that by swapping it with its parent until it finds a position where it is greater than the parent or until it becomes the top of the tree. Notice that by adding a 1 to our min heap, it will only take 3 swaps to place the 1 at the top of the tree. Only a few elements in the array need to be moved, which means our time complexity is very low compared to maintaining a fully sorted array.

--picture 2--