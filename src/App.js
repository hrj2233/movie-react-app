import { useState, useEffect } from 'react';

function Hello() {
  useEffect(() => {
    console.log('created :)');
    //cleanup function(컴포넌트가 destroy될때 사용)
    //ex.컴포넌트가 없어질때 어떤 분석 결과를 보내고 싶을때,
    //또는 eventlistener를 지우고 싶을때
    return () => console.log('destroyed :(');
  }, []);
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;
