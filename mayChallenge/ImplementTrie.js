// Implement Trie (Prefix Tree)
// Implement a trie with insert, search, and startsWith methods.

// Runtime: 168 ms
// Memory Usage: 54.5 MB

// Initialize your data structure here.
var Trie = function() {
    // create a map;
    this.map = {};
};

/* Inserts a word into the trie.
 * @param {string} word
 * @return {void}
*/

Trie.prototype.insert = function(word) {

    let cur= this.map;
    for(let c of word){
        if(!cur[c]){
            cur[c] = {isEnd: false}
        }
        cur = cur[c]
    }
    cur.isEnd = true;
    return true;
};

/*
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */


Trie.prototype.search = function(word) {
    let cur= this.map;
    for(let c of word){
        if(!cur[c]) return false;
        else cur = cur[c];
    }
    return cur.isEnd;
};

/*
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */


Trie.prototype.startsWith = function(prefix) {
    let cur = this.map;
    for(let c of prefix){
        if(!cur[c]) return false;
        else cur = cur[c]
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
