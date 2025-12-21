async function getUserInfo(userId) {
  const response = await fetch(
    `https://learn.codeit.kr/api/employees/${userId}`
  );

  const user = await response.json();
  return user;
}

const user = getUserInfo(1);
console.log(user);

function parseData(jsonString) {
  return new Promise((resolve) => {
    console.log('데이터 파싱 중...');

    const data = JSON.parse(jsonString);

    setTimeout(() => {
      console.log('파싱 완료');
      resolve(data);
    }, 1000);
  });
}

// syntax sugar
