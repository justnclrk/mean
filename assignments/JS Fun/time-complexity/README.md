Time complexity
Objectives:
Understand O(N) time complexity.
Consider ways to reduce time complexity.
We are all familiar with the data structure known as an array. Arrays are incredibly useful, but sometimes it can be time consuming to find something in the array. For example, take a look at this function. What is the purpose of this function?

function mystery(arr){
    var temp = 0;
    for(var i=1; i<arr.length; i++){
        if(arr[i] < arr[temp]){
            temp = i;
        }
    }
    var result = arr[temp];
    for(temp; temp<arr.length-1; temp++){
        arr[temp] = arr[temp+1];
    }
    arr.pop();
    return result;
}
Take your time and determine what this function is doing before reading on. Next, think about the Big O time complexity of this function. In other words, how can we expect the length of the provided array to affect how long it takes the algorithm to complete, assuming the worst case scenario?

We can expect this function to be O(N). In the first for-loop, we are iterating through all the elements in the array from index 1 to the last index. Therefore, the time to run this for-loop will directly reflect how long the array is. The longer the array, the longer this for-loop will take. This is what we call a linear correlation. The number of elements in the array (N) will directly correlate with how many loops we do.

If you've read down this far, then you should know what this function does! If you haven't figured it out yet, find a friend and T-diagram it now before continuing!

Although there is a second loop in the function which will also likely take longer depending on the length of the provided array, Big O time complexity does not take multiple loops in sequence into consideration. In other words, to indicate that we have two loops in this function, we could say that this is O(2N). However, the effect of the 2 is minimal. The overall effect that we are interested in is that the length of the array will directly correlate with how long the function takes to complete. Constants, such as the number 2, do not change this overall effect, and therefore we ignore them. We still say that this function is O(N). On the other hand, if the second loop were nested within the first, then that would be different! Then we would be talking about a time complexity of O(N^2).

By this point you've surely figured out what the mystery function is doing! It is removing the minimum value in the array and returning that value. Now we can think about how we could make our lives easier and more effectively find and remove the minimum value in an array. Is there any way that we could make this operation take place in constant time, O(1)? Constant time means that no matter how long our array is, the amount of time needed to complete the algorithm will never change.

It is possible to remove the minimum value in the array in constant time, but it would require that the array be sorted. If the array were sorted from max to min, for example [95, 90, 87, 63, 58, 20, 19], then it would be incredibly easy to remove and return the minimum value! All we would need to do is pop from the array, and no matter how long the array is, it would always take the same amount of time. 

The drawback of this plan is that we now need to maintain a sorted array. Imagine trying to add the number 100 to this sorted array. Now we would be back to time complexity O(N), shifting all the values in the array over one position so that 100 could be placed at the beginning of the array.

In the next module, we will introduce the heap data structure, which is a way of keeping our data organized just enough so that we will always know where our minimum value is. We'll have to put some time into keeping our data a little organized, but not as much as would be needed to keep everything in perfect order.