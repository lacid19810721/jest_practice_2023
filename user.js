// user.js

// 테스트할 함수
const getUser = function (id) {
  return {
    id,
    email: `user${id}@test.com`,
  };
}
  
module.exports = getUser;