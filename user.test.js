const getUser = require('./user'); // 테스트할 함수를 가져온다. 

test("return a user object", () => {
  // getUser(1)의 리턴 결과값이 { 객체 } 값이 같은 경우 true
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`,
  });
});