

function selectionSort(list){

    let minNum, temp,
        curr = list.length;

    for(let i = 0; i < curr; i++){
        minNum = i;
        for(let j = i + 1; j < curr; j++){
            if(list[j]<list[minNum]){
                minNum = j;
            }
        }
        temp = list[i];
        list[i] = list[minNum];
        list[minNum] = temp;
    }
    return list;
}