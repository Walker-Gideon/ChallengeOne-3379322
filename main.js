/*
Implement the Trie class:
• Trie() Initializes the trie object.
• void insert(String word) Inserts the string word into the trie.
• boolean search(String word) Returns true if the string word is in the trie (i.e., was
inserted before), and false otherwise.
• boolean startsWith(String prefix) Returns true if there is a previously inserted
string word that has the prefix prefix, and false otherwise.
Example 1:
Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]
*/

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // insert
  insert(word) {
    let node = this.root;

    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }

      node = node.children[char];
    }

    node.isEndOfWord = true;
  }

  // search
  search(word) {
    let node = this._searchPrefix(word);
    return node !== null && node.isEndOfWord;
  }

  // startsWith
  startsWith(prefix) {
    return this._searchPrefix(prefix) !== null;
  }

  _searchPrefix(prefix) {
    let node = this.root;

    for (const char of prefix) {
      if (!node.children[char]) {
        return null;
      }

      node = node.children[char];
    }

    return node;
  }
}

const trie = new Trie();
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
console.log(trie.insert([]));
console.log(trie.insert("apple"));
console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.startsWith("app"));
console.log(trie.insert("app"));
console.log(trie.search("app"));
