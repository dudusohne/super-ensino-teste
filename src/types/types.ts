export interface Question {
  id?: number;
  name?: string;
  questions?: string[];
  answers?: string[];
}

export interface Answer {
  answer: string;
  index: number;
}
