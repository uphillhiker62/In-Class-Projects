// 2.  Given an array of names, write a function named search which takes two parameters: a list of names
// and a string to search for, and returns an array of all the names that contain the specified string.
//     Your function should be case insensitive.
//
//     function search(nameList, searchTerm) {...}
//
// Example:
//     search(['Bryce', 'Ron', 'Sarah', 'Brett', 'Steven', 'Benjamin'], 'B') => ['Bryce', 'Brett', 'Benjamin']
// search(['Bryce', 'Ron', 'Sarah', 'Brett', 'Steven', 'Benjamin'], 'br') => ['Bryce', 'Brett']
// search(['Bryce', 'Ron', 'Sarah', 'Brett', 'Steven', 'Benjamin'], 'bry') => ['Bryce']
//
// Hint:  You can get an all uppercase copy of a string by calling .toUpperCase(), or an all lowercase copy by calling .toLowerCase()


function search(nameList, searchTerm) {

    let results = [];

    for (let i = 0; i < nameList.length; i++) {
        let currName = nameList[i].toLowerCase();

        let nameContainsSearchTerm = currName.indexOf(searchTerm.toLowerCase()) >= 0;
        if (nameContainsSearchTerm) {
            results.push(nameList[i]);
        }
    }

    return results;
    //console.log(results);
};