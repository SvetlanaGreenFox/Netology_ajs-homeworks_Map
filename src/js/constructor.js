export default class ErrorRepository {
  constructor() {
    this.members = new Map([
      [1, 'Выбранный персонаж уже существует'],
      [2, 'У персонажа закончились жизни'],
      [3, 'Что-то пошло не так'],
    ]);
  }

  translate(code) {
    if (this.members.has(code)) {
      return this.members.get(code);
    }
    return 'Unknown error';
  }
}
