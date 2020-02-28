const Heap = require('collections/heap');

/**
 *
 * @param {number} numToys  an integer representing the number of toys
 * @param {number} topToys an integer representing the number of top toys your algorithm needs to return
 * @param {string[]} toys a list of strings representing the toys
 * @param {number} numQuotes an integer representing the number of quotes about toys
 * @param {string[]} quotes a list of strings that consists of space-sperated words representing articles about toys
 */
function topNBuzzWords(numToys, topToys, toys, numQuotes, quotes) {
    const heap = new Heap(null, null, comparator);
    const count = {};
    for(let toy of toys) { // initialize
        count[toy] = [0, 0]; // [count, quoteCount]
    }
    
    for(let quote of quotes) {
        let toyInQuote = initToyInQuote(toys);
        let wordList = quote.split(/\W+/);
        for(let w of wordList) {
            let word = w.toLowerCase();
            if(count[word] !== undefined) {
                count[word][0] += 1;
                if(!toyInQuote[word]) {
                    count[word][1] += 1;
                    toyInQuote[word] = true;
                }
            }
        }
    }

    // Push data into heap
    for(let toy of toys) {
        heap.push({count: count[toy][0], quoteCount: count[toy][1], toy})
        if(heap.length > topToys) {
            heap.pop();
        }
    }
    const res = [];
    while(heap.length > 0) {
        res.push(heap.pop().toy);
    }
    return res.reverse();
}

function initToyInQuote(toys) {
    const res = {};
    for(let toy of toys) { // initialize
        res[toy] = false;
    }
    return res;
}

function comparator(a, b) {
    if(a.count !== b.count) {
        return b.count - a.count;
    }
    if(a.quoteCount !== b.quoteCount) {
        return b.quoteCount - a.quoteCount;
    }
    return a.toy.localeCompare(b.toy);
}



console.log(topNBuzzWords(
  6,
  3,
  ["elmo", "elsa", "legos", "drone", "tablet", "warcraft"],
  6,
  (quotes = [
    "Elmo is the hottest of the season! Elmo will be on every kid's wishlist!",
    "The new Elmo dolls are super high quality",
    "Expect the Elsa dolls to be very popular this year, Elsa!",
    "Elsa and Elmo are the toys I'll be buying for my kids, Elsa is good",
    "For parents of older kids, look into buying them a drone",
    "Warcraft is slowly rising in popularity ahead of the holiday season"
  ])
));
