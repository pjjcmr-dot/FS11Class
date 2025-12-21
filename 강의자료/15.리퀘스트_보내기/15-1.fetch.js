const response = await fetch('https://learn.codeit.kr/api/color-surveys');

console.log('status', response.status);

if (!response.ok) {
  throw Error(`HTTP ERROR! Status :${response.status}`);
}

console.log(response.headers);

// const data = await response.json();
// console.log(data);
