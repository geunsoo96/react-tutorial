import "./App.css";
import Component from "../components/component";
import { createContext } from "react";
const data = createContext();
// 1. createContext로 전역으로 관리할 데이터의 대장 만들기
// 2. 데이터를 사용할 컴포넌트를 1에서 만든 변수의 이름. provider로 감싸기
// 3. <변수의 이름.provider value={전송할 데이터}><component></component> </qustndml dlfma.provider>로 데이터 남겨두기
// 4. 전송할 데이터가 2개 이상이라면 value={{데이터 1. 데이터 2}}객체로 나눈다
// 5. 1번에서 만든 데이터의 대장을 export 모듈로 내보낸다.
function App() {
  let test = "안녕";
  let hello = "기모찌";
  return (
    <div>
      <data.Provider value={{ hello, test }}>
        <Component test={test}></Component>
      </data.Provider>
    </div>
  );
}

export { App, data };
