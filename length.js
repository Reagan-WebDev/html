function countWords(str) {
    const array = str.trim().split(/\s+/);
    return array.length;
}
const essay = "Children develop a better understanding of English when they study a new language.They become more aware of grammar, conjugation and sentence structures. This helps them understand how English works, enhances their comprehension and accelerates their ability to read and write."
console.log("Word count:", countWords(essay));
