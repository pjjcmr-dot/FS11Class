// 1page, 1 ~ 10;
// 2page, 11~ 20;
// 3page, 21~ 30;

const OFFSET = 20; // 건너뛸 개수
const LIMIT = 10; // 페이지당 가져올 개수

const response1 = await fetch(
  `https://learn.codeit.kr/api/color-surveys?offset=${OFFSET}&limit=${LIMIT}`
);

const SURVEY_ID = 6;
const response = await fetch(
  `https://learn.codeit.kr/api/color-surveys/${SURVEY_ID}`
);

if (!response.ok) {
  throw Error(`HTTP ERROR! Status :${response.status}`);
}

const data = await response.json();
console.log(data);
