export const firstLetterUppercase = (word: string): string => {
  return word[0]?.toUpperCase() + word.slice(1);
};
