import { IAnswer } from 'src/models/paintings.model';

const answersPerQuestion = 4;

const randomiser = (questionId: number): number[] => {
  const randNums = new Set<number>();
  while (randNums.size < 3) {
    const num = Math.round(Math.random() * 120);
    if (num !== questionId) {
      randNums.add(num);
    }
  }
  return Array.from(randNums);
};

export const anwersMake = (questionId: number) => {
  const wrongAnswerPaintIds = randomiser(questionId);
  const res: IAnswer[] = [];
  const rightAnswerIndex = Math.round(Math.random() * 4);
  for (let i = 0; i < answersPerQuestion; i++) {
    res.push({
      id: i,
      isWrong: i === rightAnswerIndex ? false : true,
      paintingId:
        i === rightAnswerIndex
          ? questionId
          : (wrongAnswerPaintIds.pop() as number),
    });
  }
  return res;
};
