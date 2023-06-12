/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
   let frqarr=[];
  for(let i=0;i<26;i++)
  {
    frqarr.push(0);
  }
  for(let i=0;i<str1.length;i++)
  {
    let k=charCodeAt(str1.charAt(i));
    frqarr[k]++;
  }
  for(let i=0;i<str2.length;i++)
  {
    let k=charCodeAt(str2.charAt(i));
    frqarr[k]--;
  }
  for(let i=0;i<26;i++)
  {
    if(frqarr[i]!=0)
    {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
