const API_KEY = process.env.REACT_APP_API_KEY;

export async function tmpAPI(formDate) {
  const response = await fetch(
    `http://apis.data.go.kr/B551011/KorService/searchKeyword?serviceKey=${API_KEY}&_type=json&MobileOS=WIN&numOfRows=10&MobileApp=test&arrange=P&keyword=광화문`,
    {
      method: "GET",
      body: formDate,
    }
  );
  if (!response.ok) {
    throw new Error("정보를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
