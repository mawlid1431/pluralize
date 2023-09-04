function pluralize(words) {
  const wordCount = {}; // Create an object to count the occurrences of each word
  const pluralizedWords = [];

  // Count the occurrences of each word
  for (let word of words) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  // Iterate through the words and pluralize if they appear more than once
  for (let word of words) {
    if (wordCount[word] > 1) {
      pluralizedWords.push(word + 's');
    } else {
      pluralizedWords.push(word);
    }
  }

  return pluralizedWords;
}

// Example usages:
console.log(pluralize(["cat", "dog", "cat", "mouse"])); // Output: ["cats", "dog", "mouse"]
console.log(pluralize(["car", "car", "car"])); // Output: ["cars"]

