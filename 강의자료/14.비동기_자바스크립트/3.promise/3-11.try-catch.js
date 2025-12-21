async function loadUserData() {
  try {
    const response = await fetch(
      'https://learn.codeit.krrrrrr/api/employees/5'
    );
    const user = await response.json();
    return user;
  } catch (error) {
    throw new Error('데이터를 불러오는 중 오류가 발생했습니다.');
  }
}

loadUserData()
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
