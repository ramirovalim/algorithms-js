// Given a string with a lot of repeated characters, eg. "aaabbdcccaaaa",
// write some code that can encode it such that the character repetition
// is represented as a number instead: "3a2b1d3c4a".

// We’ve written a program that can produce a run-length encoded output.
// How would you change your code if we wanted to support
// multiple output formats? For example, we might have formats
// where the example string would produce any of:
//
//  * a3b2d1c3a4
//  * AaaBbDCccAaaa
//  * 32134
//  * 3🏠2🙂1❤️3🙁4🏚
//  * …
//

export default function repetitionCounter(string) {
  if (!string) {
    return string;
  }

  // const chars = string.split("");
  let counter = 0;
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    counter++;
    if (string[i + 1] !== current) {
      result = result + (counter.toString() + current);
      counter = 0;
      // result += formatterFunc((counter, letter));
    }
  }
  console.log(result);
}
