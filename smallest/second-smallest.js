let arr=[5,4,1,3,6,7];
let min = arr[0];
let smin = arr[0];
for(let i=1; i<arr.length;i++){
if(arr[i]<min){
    min=arr[i];
}
}
for(let i=1; i<arr.length; i++){
    if(arr[i]<smin && arr[i]>min){
        smin = a[i];
    }
}
console.log(smin);