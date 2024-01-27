import './App.css';
import React, { useState } from 'react';

function App() {
  let count4 = 0;
  let listRef = React.createRef();
  let inputRef = React.createRef();

  const [option, setOption] = useState();
  const [bgcolor, setBgcolor] = useState({ backgroundColor: (0, 0, 0) });
  const [input8, setInput8] = useState('');

  function randomInt(a, b) {
    if (a > b) {
      [a, b] = [b, a];
    }
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }
  function task1() {
    console.log('task2');
  }
  function task2() {
    const task2 = document.querySelector('.task-2');
    task2.classList.add('active');
  }
  function task3() {
    console.log(document.querySelector('.task-3').value);
  }
  function task4() {
    count4++;
    console.log(count4);
  }
  function task5(event) {
    const checkbox5 = document.querySelector('.task-5');
    const out5 = document.querySelector('.out-5');
    checkbox5.checked
      ? (out5.textContent = event.target.value)
      : (out5.textContent = 0);
  }
  function task6() {
    setOption(listRef.current.value);
  }
  function task7() {
    setBgcolor({
      backgroundColor: `rgb(${randomInt(0, 255)},${randomInt(
        0,
        255
      )},${randomInt(0, 255)})`,
    });
  }
  function task8(event) {
    const inputValue = event.key;
    const isDigit = /^\d$/.test(inputValue);
    setInput8((prevOutput) => prevOutput + (isDigit ? '1' : '0'));
  }
  function task9(el) {
    document.querySelector('.out-9').textContent = el.target.value;
  }
  let ar10 = [5, 6, 7];
  function task10() {
    const inp10 = document.querySelector('.i-10').value;
    ar10.push(parseInt(inp10));
    console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button onClick={task1} className="task-1">
          Push
        </button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div onMouseEnter={task2} className="task-2"></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button onClick={task4} className="task-4">
          Count
        </button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input onChange={task5} type="checkbox" value="55" className="task-5" />
        <div className="out-5"></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={listRef}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6">{option}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" style={bgcolor}></div>
        <button className="task-7" onClick={task7}>
          Color
        </button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input
          type="text"
          className="task-8"
          onKeyDown={task8}
          ref={inputRef}
        ></input>
        <div className="out-8">{input8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div className="out-9"></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10"></input>
        <button className="task-10" onClick={task10}>
          Push
        </button>
      </section>
    </>
  );
}

export default App;
