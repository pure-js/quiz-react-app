import getAnsweredQuestions from './getAnsweredQuestions';

test('adds 1 + 2 to equal 3', () => {
  const questions = [
    {
      name: '1',
    },
    {
      name: '2',
    },
  ];
  const answers = [
    {
      name: '1',
    },
  ];

  expect(getAnsweredQuestions(questions, answers)).toBe([{
    name: '1',
  }]);
});
