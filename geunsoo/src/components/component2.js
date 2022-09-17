import { useContext } from "react";
import { data } from "../App/App";
const Component2 = () => {
  // 6. export로 내보낸 데이터의 대장을 import합니다
  // 7. 데이터를 저장할 변수를 만들고 useContext(import한 대장의 이름)로 할당한다.
  // ex) const data = useContext(대장)
  // 8. 콘솔로 data를 찍어보고 전달받은 데이터를 사용한다
  // 2개 이상의 데이터를 가져왔을 경우엔 구조 분해 할당을 통해 조금 더 편리하게 사용 가능
  // const {data1, data2} = useContext(data)
  const { hello, test } = useContext(data);
  console.log(hello);
  console.log(test);
  let geunsoo = "니미럴";
  return (
    <>
      <div>{hello}</div>
      <div>{test}</div>
    </>
  );
};

export default Component2;
