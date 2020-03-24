/*
Given a list accounts, each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some email that is common to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

Example 1:
Input: 
accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
Output: [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]
Explanation: 
The first and third John's are the same person as they have the common email "johnsmith@mail.com".
The second John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], 
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
Note:

The length of accounts will be in the range [1, 1000].
The length of accounts[i] will be in the range [1, 10].
The length of accounts[i][j] will be in the range [1, 30]. */
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

 /*
    The Key is to consider each email is a node and email that belongs to same user is 
    connected (Edges) And after that we can use DFS/ Union find
  */

  /**
    Try DFS Solution
   */


/**
 * Union Find Solution
 */
var accountsMerge = function(accounts) {
    const rank = {}; // For Union find
    const parents = {}; // Use for union find
    const owner = {}; // Owner of each email
    const emails = {}
    const res = [];
  
    for (let acc of accounts) {
      for (let i = 1; i < acc.length; i++) {
        rank[acc[i]] = 0;
        parents[acc[i]] = acc[i];
        owner[acc[i]] = acc[0];
      }
    }
  
    for (let acc of accounts) {
      for (let i = 1; i < acc.length; i++) {
        union(acc[1], acc[i]);
      }
    }
  
    for(let p of Object.keys(parents)) {
        let root = find(p);
        if(!emails[root]) {
          emails[root] = [p];
        } else {
          emails[root].push(p);
        }
    }

    for(let k of Object.keys(emails)) {
        res.push([owner[k], ...emails[k].sort()])
    }

    return res;
  
    function find(email) {
      let root = email;
      while (root !== parents[root]) {
        root = parents[root];
      }
  
      while (email !== root) {
        let temp = parents[email];
        parents[email] = root;
        email = temp;
      }
  
      return root;
    }
  
    function union(e1, e2) {
      let e1Root = find(e1);
      let e2Root = find(e2);
      if (e1Root === e2Root) {
        return;
      }
      if (rank[e1Root] > rank[e2Root]) {
        parents[e2Root] = e1Root;
      } else if (rank[e2Root] > rank[e1Root]) {
        parents[e1Root] = e2Root;
      } else {
        parents[e1Root] = e2Root;
        rank[e2Root] += 1;
      }
    }
  
    function connected(e1, e2) {
      return find(e1) === find(e2);
    }
  };
  