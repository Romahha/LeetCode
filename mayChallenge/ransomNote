//Ransom Note
/*Given an arbitrary ransom note string and another string containing
 letters from all the magazines, write a function that will return true
 if the ransom note can be constructed from the magazines ;
 otherwise, it will return false.
Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.*/

// my solution
// Runtime: 64 ms
// Memory Usage: 42.7 MB

var canConstruct = function(ransomNote, magazine) {
    for(var i=0; i<ransomNote.length; i++) {
        if(magazine.indexOf(ransomNote[i]) == -1) {
            return false;
        } else {
            magazine = magazine.substring(0, magazine.indexOf(ransomNote[i])) +                             magazine.substring(magazine.indexOf(ransomNote[i])+1, magazine.length);
        }
    }
    return true;
};

// better solution 
// Runtime: 60 ms
// Memory Usage: 37.1 MB

var canConstruct = function(ransomNote, magazine) {
    let chars = ransomNote.split('');
    let magChars = magazine.split('');

    for (let i = 0; i < ransomNote.length; i++) {
        if (magChars.includes(chars[i])) magChars[magChars.indexOf(chars[i])] = '';
        else return false;
    }

    return true;
};
