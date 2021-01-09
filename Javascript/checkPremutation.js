// 1.2 Check Premutation

function isPreMutation(str1,str2){
    // if length is different its not premutation
    if(str1.length!==str2.length) return false;
    let characterCount = [];
  
    for(let i=0;i<str1.length;i++){
        // we can collect characters from both strings in one loop
        // because they are same size
        
        if(characterCount[str1[i]]===undefined){
            characterCount[str1[i]] = 1;     
        }
        else{
            characterCount[str1[i]]++;
            if(characterCount[str1[i]]==0) delete characterCount[str1[i]];
        }
        
        if(characterCount[str2[i]]===undefined){
            characterCount[str2[i]] = -1;     
        }
        else{
            characterCount[str2[i]]--;
            if(characterCount[str2[i]]==0) delete characterCount[str2[i]];
        }
        
    }
    // Object keys is O(1) complexity there can be maximum of 128 characters of ASCII table
    if(Object.keys(characterCount).length>0) {
        return false;
    }
    return true;

}
console.log(isPreMutation("abc","vsd"));
console.log(isPreMutation("dog","gdo"));
