/*
Given a map Map<String, List<String>> userSongs with user names as keys and a list of all the songs that the user has listened to as values.

Also given a map Map<String, List<String>> songGenres, with song genre as keys and a list of all the songs within that genre as values. 
The song can only belong to only one genre.

The task is to return a map Map<String, List<String>>, where the key is a user name and the value is a list of the user's favorite genre(s). Favorite genre is the most listened to genre. A user can have more than one favorite genre if he/she has listened to the same number of songs per each of the genres.

Example 1:

Input:
userSongs = {  
   "David": ["song1", "song2", "song3", "song4", "song8"],
   "Emma":  ["song5", "song6", "song7"]
},
songGenres = {  
   "Rock":    ["song1", "song3"],
   "Dubstep": ["song7"],
   "Techno":  ["song2", "song4"],
   "Pop":     ["song5", "song6"],
   "Jazz":    ["song8", "song9"]
}

Output: {  
   "David": ["Rock", "Techno"],
   "Emma":  ["Pop"]
}

Explanation:
David has 2 Rock, 2 Techno and 1 Jazz song. So he has 2 favorite genres.
Emma has 2 Pop and 1 Dubstep song. Pop is Emma's favorite genre.
Example 2:

Input:
userSongs = {  
   "David": ["song1", "song2"],
   "Emma":  ["song3", "song4"]
},
songGenres = {}

Output: {  
   "David": [],
   "Emma":  []
} */

function favorite(userSongs, songGenres) {
  const songMap = {};
  const userGenreMap = {};
  const res = {};
  for (let k of Object.keys(songGenres)) {
    for (let song of songGenres[k]) {
      songMap[song] = k;
    }
  }
  for (let user of Object.keys(userSongs)) {
    userGenreMap[user] = {};
    for (let song of userSongs[user]) {
      let genre = songMap[song]; // get genre of the song
      if (genre) {
        // genre can be undefined
        if (!userGenreMap[user][genre]) {
          userGenreMap[user][genre] = 1;
        } else {
          userGenreMap[user][genre] += 1;
        }
      }
    }
    res[user] = [];
    let favCount = 0;
    for (let genre of Object.keys(userGenreMap[user])) {
      if (userGenreMap[user][genre] > favCount) {
        res[user] = [genre];
        favCount = userGenreMap[user][genre];
      }
      else if (userGenreMap[user][genre] === favCount) {
        res[user].push(genre);
      }
    }
  }
  return res;
}

console.log(
  favorite(
    {
      David: ["song1", "song2", "song3", "song4", "song8"],
      Emma: ["song5", "song6", "song7"]
    },
    {
      Rock: ["song1", "song3"],
      Dubstep: ["song7"],
      Techno: ["song2", "song4"],
      Pop: ["song5", "song6"],
      Jazz: ["song8", "song9"]
    }
  )
);

console.log(
  favorite(
    {
      David: ["song1", "song2", "song3", "song4", "song8"],
      Emma: ["song5", "song6", "song7"]
    },
    {}
  )
);
