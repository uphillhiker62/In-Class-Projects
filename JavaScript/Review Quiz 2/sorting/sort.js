// 4.  Using any algorithm of your choice, write a function called 'sort' that takes an array of numbers and
// returns a array of numbers sorted in ascending order
//
// Example:  function sort([3, 5, 1, 7, 5]) ==> [1, 3, 5, 5, 7]



function sort(list){

    let min, temp,
        curr = list.length;

    for(let i = 0; i < curr; i++){
        min = i;
        for(let j = i + 1; j < curr; j++){
            if(list[j]<list[min]){
                min = j;
            }
        }
        temp = list[i];
        list[i] = list[min];
        list[min] = temp;
    }
    return list;
}