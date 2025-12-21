const BASE_URL = 'https://panda-market-api-crud.vercel.app';

const getProductList = async ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
} = {}) => {
  try {
    const response = await fetch(
      `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}'`
    );

    if (!response.ok) {
      throw new Error(
        `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createProduct = async (data) => {
  try {
    const response = await fetch(
      'https://panda-market-api-crud.vercel.app/products',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `HTTP ERROR, status: ${response.status}, text: $