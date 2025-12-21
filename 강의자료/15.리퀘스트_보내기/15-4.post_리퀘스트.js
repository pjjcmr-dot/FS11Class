const newSurveyData = {
  id: 91,
  mbti: 'ENFP',
  colorCode: '#CA6952',
  password: '1234',
};

try {
  const response = await fetch('https://learn.codeit.kr/api/color-surveys/91');

  const text = response.statusText;

  if (!response.ok) {
    throw new Error(`HTTP error 발생 STATUS: ${response.status} ${text}`);
  }

  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
