//Find the missing numbers in the given array
var arr=[1,2,3,4,5,7,8,10,11];
var missing =[];

for(var i=1;i<=arr.length;i++){
    if (arr.indexOf(i)===-1){
    missing.push(i);
    console.log("missing no.",missing);
    }

}
//Find the duplicate numbers in the given integer array

var integer=[1,2,3,4,5,6,4,2,1];
var duplicate=[];
for(i=0;i<integer.length;i++){
    if(duplicate.includes(integer[i])){
        console.log("Duplicate no is:",integer[i]);
    }
    else{
        duplicate.push(integer[i]);
    }
}
//How do you find the largest and smallest number in an unsorted integer array?
var find=[23,25,22,28,13,45,60];
var sort=find.sort((a,b)=>a-b);
var smallestNumber,largestNumber;
smallestNumber=sort[0];
console.log("smallest-number-is",smallestNumber);
largestNumber=sort[sort.length-1];
console.log("largest-number-is:",largestNumber);

//How do you find all pairs of an integer array whose sum is equal to a given number?
  
 

// Function to check if array has 2 elements
// whose sum is equal to the given value
function hasArrayTwoCandidates(A, arr_size, sum)
{
    var l, r;

 

    /* Sort the elements */
    A.sort();

 

    /* Now look for the two candidates in
    the sorted array*/
    l = 0;
    r = arr_size - 1;
    while (l < r) {
        if (A[l] + A[r] == sum)
            return 1;
        else if (A[l] + A[r] < sum)
            l++;
        else // A[i] + A[j] > sum
            r--;
    }
    return 0;
}