
function permutationSort(a) {
    let attempt = 0
    let sorted = false
    if(check(a)){return 1;}
    else{
        function perms(arr, i){
            if(i == arr.length - 1){
                attempt++
                // console.log(arr)
                if(check(arr)){
                    // console.log(arr)
                    sorted = true
                    return attempt
                }
            }
            for(let j = i; j < arr.length; j++){
                swap(arr, i, j);
                perms(arr, i + 1);
                if(sorted == true){
                    return attempt;
                }
                swap(arr, i, j);
            }
        }
        perms(a, 0)
        // console.log(arr);
        return attempt;
    }
    
}



function check(a){
    for(i = 0; i < a.length; i++){
        if(a[i] > a[i+1]){
            return false;
        }
    }
    return true
}

function swap(a,i,j){
    let tmp = a[i]
    a[i] = a[j]
    a[j] = tmp
}


// let arr = [4,2,6,1,5,9,6]
// let arr = [1,2,3,4,5]
// console.log(permutationSort(arr))
