const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

async function loadProduct() {
  const products = [];
  for (let i = 1; i <= 5; i++) {
    console.log('start');
    const response = await fetch(`https://learn.codeit.kr/api/employees/${i}`);
    await sleep(1000);
    const product = await response.json();
    products.push(product);
  }
  return products;
}

async function main() {
  const result = await loadProduct();
  console.log(result);
}

main();
