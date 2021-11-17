function bubble (arr){
    for(let i=0; i < arr.length; i++){
        for(let j=0; j < arr.length; j++){
            if (arr[i] < arr[j] ) {
                let holder = arr[i];
                arr[i]=arr[j];
                arr[j]=holder;
            } 
        }
    }
}

let test = [10, 56, 200, 8, 858, 1000, 30,800, 4, 100, 50];
bubble (test)
console.log (test)