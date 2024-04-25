[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

### My Analysis

in my algorithm, the best case is that the given array is already sorted because I have a line of code that checks if it is sorted before any loops or recursion.

```
if(check(a)){return 1;}
```
```
function check(a){
    for(i = 0; i < a.length; i++){
        if(a[i] > a[i+1]){
            return false;
        }
    }
    return true
}
```
this makes the best-case complexity $\theta(n)$ because it just has to iterate through the for loop one time at the beginning of the code to check if it is already sorted.

in the worst case, we have to check every single permutation possible which in the worst case, the sorted array is the n!th permutation.
this would make our worst case complexity $\theta(n(n!))$ the extra n is added in from the for loop that checks if the array is in a sorted state.

If we were to just randomly generate permutations and then check, it is possible that we would never find the sorted array because it could check the same wrong permutation infinite times but never check the correct permutation. A random solution could also choose the correct sorted list very quickly, but the risk of never finding it is not worth the possibility of finding it quickly










### Sources

https://www.youtube.com/watch?v=GuTPwotSdYw this video was a very valuable way to help me understand the recursion needed to find the permutations

https://www.bing.com/search?q=loop+javascript+code+permutations+series+of+numbers+for+sorting&qs=n&form=QBRE&sp=-1&lq=0&pq=loop+javascript+code+permutations+series+of+numbers+for+sorting&sc=8-63&sk=&cvid=319FB61FA1BB4ACFAEF74A950FD91D5E&ghsh=0&ghacc=0&ghpl=&showconv=1   also helped withfinding the permutations








