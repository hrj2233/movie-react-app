import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  // 한번만 렌더링 되고 실행안됨.
  // 아무것도 보고 있지 않기 때문에.
  useEffect(() => {
    console.log('i run only once.');
  }, []);

  // keyword가 변할때만 다시 렌더링
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  // counter가 변할때만 다시 렌더링
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  // keyword 또는 counter가 변할때 다시 렌더링
  useEffect(() => {
    console.log('I run when keyword & counter change.');
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here...."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
