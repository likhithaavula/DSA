let arr = [1,2,1,3,4,5];

function checkSort(){
    for(let i =1; i<arr.length; i++){
        if(arr[i]>=arr[i-1]){
    
        }else{
            return false;
        }
    }

    return true;
}


console.log(checkSort());