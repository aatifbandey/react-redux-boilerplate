const defaultProperties = {
  title: 'Title of the question',
  answer: null,
};
const defaultChoices = {
  choices: [
    {
      title: 'Choice 1',
    },
    {
      title: 'Choice 2',
    },
    {
      title: 'Choice 3',
    },
  ],
};

export const questionList = () => ({
  rating: {
    ...defaultProperties,
    minValue: 1,
    maxValue: 10,
    type: 'rating',
  },
  selection: {
    ...defaultProperties,
    ...defaultChoices,
    type: 'selection',
  },
});
