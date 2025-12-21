// 1. 데이터 불러오기
// type (x: () => void) => void
// function fetchStudentData() {
//   console.log('서버에서 데이터를 요청 중...');

//   const response =
//     '[{"name":"철수","grade":2},{"name":"영희","grade":1},{"name":"민수","grade":2},{"name":"지영","grade":1}]';

//   setTimeout(() => {
//     console.log('데이터 수신 완료!');
//     // callback(response);
//   }, 1000);
// }

// type: () => void
// fetchStudentData((res) => {
//   console.log('받은 데이터', res);
// });

// 2. 불러온 데이터를 파싱(parsing)
// function parseData(jsonString, callback) {
//   console.log('데이터 파싱 중...');

//   const data = JSON.parse(jsonString);

//   setTimeout(() => {
//     console.log('파싱 완료');
//     callback(data);
//   }, 1000);
// }

// const response =
//   '[{"name":"철수","grade":2},{"name":"영희","grade":1},{"name":"민수","grade":2},{"name":"지영","grade":1}]';

// parseData(response, (data) => {
//   console.log('파싱된 데이터', data);
//   console.log('타입', typeof data);
// });

// const x = [
//   { name: '철수', grade: 2 },
//   { name: '영희', grade: 1 },
//   { name: '민수', grade: 2 },
// ];

// 3. 데이터 정리
// type (x: {name: string, grade: number}[], y: (Object) => void)
// function groupByGrade(students, callback) {
//   console.log('학년별 그룹화 중...');

//   const grouped = students.reduce((acc, cur) => {
//     const { name, grade } = cur;

//     if (!acc[grade]) {
//       acc[grade] = [];
//     }

//     acc[grade].push(name);
//     return acc;
//   }, {});

//   setTimeout(() => {
//     console.log('그룹화 완료');
//     callback(grouped);
//   }, 1000);
// }

// const students = [
//   { name: '철수', grade: 2 },
//   { name: '영희', grade: 1 },
//   { name: '민수', grade: 2 },
// ];

// groupByGrade(students, (result) => {
//   console.log('그룹화 결과', result);
// });

// fetchStudentData((res) => {
//   parseData(res, (students) => {
//     groupByGrade(students, (result) => {
//       console.log('그룹화 결과', result);
//     });
//   });
// });
