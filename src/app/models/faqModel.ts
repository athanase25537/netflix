export class FaqModel {
    constructor(
        public id: string,
        public question: string,
        public answers: string[],
    ) { }
}