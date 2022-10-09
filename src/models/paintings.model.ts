export interface IPainting {
  author: string;
  name: string;
  year: string;
  imageNum: string;
}

interface IAnswer {
  id: number;
  isWrong: boolean;
  painting: IPainting;
}

export interface IPaintingQuestion {
  id: string;
  painting: IPainting;
  answers: IAnswer[];
}

export interface IPaintingCategory {
  categoryNum: number;
  isAllQuestionGuessed: boolean;
  questions: IPaintingQuestion[];
}
