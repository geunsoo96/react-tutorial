import { useState } from "react";

export default function Hello(props) {
  const [name, setName] = useState("Mike");
  const [age, setAge] = useState(props.age);
  const msg = age > 19 ? "다 컸구나" : "우유 더 먹고 오렴";
  return (
    <div>
      <h1 id="name">
        {name}({age} : {msg})
      </h1>
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
          setAge(age + 1);
        }}
      >
        Plus
      </button>
    </div>
  );
}
