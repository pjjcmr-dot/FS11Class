function fetchStudentData() {
  return new Promise((resolve, reject) => {
    console.log('서버에서 데이터를 요청 중...');

    const response =
      '[{"name":"철수","grade":2},{"name":"영희","grade":1},{"name":"민수","grade":2},{"name":"지영","grade":1}]';

    if (!response) {
      reject('error 발생했습니다');
    }

    setTimeout(() => {
      console.log('데이터 수신 완료!');
      //   resolve(response);
      reject('통신 불안정이 발생했습니다!');
    }, 1000);
  });
}

fetchStudentData()
  .then((result) => console.log(result))
  .catch((reason) => console.log('error', reason));

await fetch('https://learn.codeit.kr/api/employees/5')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log('항상 실행'));

async function loadUserData() {
  try {
    const response = await fetch('https://learn.codeit.kr/api/employees/5');
    const user = await response.json();
    return user;
  } catch (error) {
    throw new Error('데이터를 불러오는 중 오류가 발생했습니다.');
  } finally {
    console.log('항상 실행');
  }
}
