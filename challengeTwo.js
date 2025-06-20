/* 
Implement the class:
Class: SearchSuggestionSystem
Methods:
• SearchSuggestionSystem(List products)
• Initializes the system with a list of product names.
• List<List> getSuggestions(String searchWord)
Returns a list of lists. Each list contains up to 3 product names with the current prefix (based on
characters typed so far in searchWord), sorted lexicographically.
Example

Input:
products = ["mobile","mouse","moneypot","monitor","mousepad"]
searchWord = "mouse"

Output:
[
 ["mobile","moneypot","monitor"],
 ["mobile","moneypot","monitor"],
 ["mouse","mousepad"],
 ["mouse","mousepad"],
 ["mouse","mousepad"]
]
*/

class SearchSuggestionSystem {
  constructor(products) {
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    let result = [];
    let prefix = "";

    for (let char of searchWord) {
      prefix += char;

      const suggestions = this.products
        .filter((product) => product.startsWith(prefix))
        .slice(0, 3);

      result.push(suggestions);
    }

    return result;
  }
}

const products = new SearchSuggestionSystem([
  "mobile",
  "mouse",
  "moneypot",
  "monitor",
  "mousepad",
]);
console.log(products.getSuggestions("mouse"));
