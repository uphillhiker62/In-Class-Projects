//QUnit

QUnit.test("hello test", function(assert) {
    assert.ok(checkStr("Hello"), "Passed!");
});

QUnit.test("hello test", function(assert) {
    assert.equal(checkStr("Hello"), true, "Passed!");
});



function checkNum(i){
    if(i >= 1 && i <= 20){
        return true;
    } else{
        return false;
    }
}

checkNum(2);
checkNum(20);
checkNum(35);



function checkStr(daString){
    if(daString.length === 5){
        return true;
    }else{
        return false;
    }
}

checkStr("Apple");
checkStr("Gates");
checkStr("Hi");