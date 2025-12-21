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
      resolve(response);
    }, 1000);
  });
}

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

function groupByGrade(students) {
  return new Promise((resolve) => {
    console.log('학년별 그룹화 중...');

    const grouped = students.reduce((acc, cur) => {
      const { name, grade } = cur;

      if (!acc[grade]) {
        acc[grade] = [];
      }

      acc[grade].push(name);
      return acc;
    }, {});

    setTimeout(() => {
      console.log('그룹화 완료');
      resolve(grouped);
    }, 1000);
  });
}

const res = await fetchStudentData();
const students = await parseData(res);
const result = await groupByGrade(students);

console.log(result);
