const API_KEY = process.env.REACT_APP_API_KEY;

export async function regionAPI(formDate) {
  const response = await fetch(
    `http://apis.data.go.kr/B551011/KorService/areaCode?serviceKey=${API_KEY}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`,
    {
      method: "GET",
      body: formDate,
    }
  );
  if (!response.ok) {
    throw new Error("정보를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  console.log(body);
  return body.response.body.items.item;
}
