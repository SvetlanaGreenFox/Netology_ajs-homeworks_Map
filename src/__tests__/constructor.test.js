import ErrorRepository from "../js/constructor";

test('Get Description Error', () => {
  const error = new ErrorRepository();

  expect(error.translate(2)).toBe('У персонажа закончились жизни');
})

test('Get Error', () => {
  const error2 = new ErrorRepository();

  expect(error2.translate(4)).toBe('Unknown error');
})