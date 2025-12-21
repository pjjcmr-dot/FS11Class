const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

async function loadProduct(index) {
  console.log('start');
  const response = await fetch(
    `https://learn.codeit.kr/api/employees/${index}`
  );
  await sleep(1000);
  const product = await response.json();
  return product;
}

// const promises = Array(5)
//   .fill(0)
//   .map((_, i) => loadProduct(i + 1));

const promises = [
  fetch(`https://learn.codeit.kr/api/employees/1`).then((res) => res.json()),
  fetch(`https://learn.codeit.kr/api/employees/2`).then((res) => res.json()),
  fetch(`https://learn.codeit.kr/api/employees/3`).then((res) => res.json()),
];

const [product1, ...rest] = await Promise.all(promises);
console.log(product1);
console.log(rest);
