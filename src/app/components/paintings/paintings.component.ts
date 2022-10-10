import { Component, OnInit } from '@angular/core';
import {
  IPainting,
  IPaintingCategory,
  IPaintingQuestion,
} from 'src/models/paintings.model';
import { anwersMake } from 'src/utils/answersMake';
import * as paintings from '../../../data/images_ru.json';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.scss'],
})
export class PaintingsComponent implements OnInit {
  paintings: IPainting[];
  categories: IPaintingCategory[] = [];
  categoriesAmount: number = 10;
  questionsAmountInCategory: number = 12;
  constructor() {}

  ngOnInit(): void {
    this.paintings = Array.from(paintings);
    this.categoriesMake();
    this.categories.forEach((e) => console.log(e));
  }

  categoriesMake() {
    for (let i = 0; i < this.categoriesAmount; i++) {
      this.categories.push({
        categoryNum: i,
        isAllQuestionGuessed: false,
        questions: this.questionMake(i),
      });
    }
  }
  questionMake(categoryNumber: number) {
    const res: IPaintingQuestion[] = [];
    for (let i = 0; i < this.questionsAmountInCategory; i++) {
      const questionId =
        Number(categoryNumber) * this.questionsAmountInCategory + i;
      res.push({
        id: `${questionId}`,
        painting: this.paintings[questionId],
        answers: anwersMake(questionId),
      });
    }
    return res;
  }
}
