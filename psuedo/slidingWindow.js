function slidingWindow(s) {
  const res = []; // to save result
  let resLength = 0; // This can be max or min length

  // Create lookup
  const dict = {};
  for (let c of s) {
    if (!dict[c]) {
      dict[c] = 1;
    } else {
      dict[c] += 1;
    }
  }

  let count = Object.keys(dict); // KEY! We use how many keys instead of total characters because there can be more than 1 char for each key

  // Two pointers
  let low = 0;
  let high = 0;

  while (high < s.length) {
    let c = s[high];
    // 1. FEASIBILITY: We find the feasible answer (by reducing count until 0)
    if (dict[c] !== undefined) {
      dict[c] -= 1;
      if (dict[c] === 0) {
        // We find all the character needs for that key
        count -= 1;
      }
    }
    // 2. OPTIMIZATION: We shorten the window from the back until it is not feasible
    while (count === 0) {
      let c = s[low];
      if (dict[c] !== undefined) {
        dict[c] += 1;
        if (dict[c] > 0) {
          // === 1 actually
          count += 1;
          // At this time, the answer is the shortest because once we increase low again, the string will not be feasible

          // Do any operation to see if current string is the answer
          if (high - low + 1 > resLength) {
            resLength = high - low + 1;
          }
        }
      }
      low += 1;
    }

    high += 1;
  }
}
