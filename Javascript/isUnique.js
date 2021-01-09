// 1.1 Is Unique


function isUnique(str) {
    // if lenght is more that ASCII Table size no need to check.
    // there are duplicated characters for sure
    if(str.length>128) return false;
    let tmpArr = [];
    
    for(let i = 0;i<str.length;i++){
        // we can possible go from both sides thoriticaly to reduce time complexity to O(log n)
        // but as long as input is limited to 128 characters time complexity is O(1) anyway
        if(tmpArr[str[i]]===undefined){
            tmpArr[str[i]] = true;
            // micro optimisation - move to next itteration
            continue;
        }
        else{
            return false;
        }
    }
    return true;
} 

console.log(isUnique("abcd"));
console.log(isUnique("abcda"));

