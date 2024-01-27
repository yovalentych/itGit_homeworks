import './App.css';
import React from 'react';
import { useState, useRef } from 'react';

function App() {
  // states
  let [st1, setSt1] = useState('');
  let [st2, setSt2] = useState(0);
  let [st3, setSt3] = useState('');
  let [st4, setSt4] = useState(0);
  let [st5, setSt5] = useState('');
  let [st6, setSt6] = useState('');
  let [st7, setSt7] = useState({ backgroundColor: 'rgb(255, 255, 255)' });
  let [st8, setSt8] = useState('');
  let [st9, setSt9] = useState('');
  let [st10, setSt10] = useState('');

  // refs
  let ref1 = useRef();
  let ref2 = useRef();

  // additional functions
  function randomInt(a, b) {
    if (a > b) {
      [a, b] = [b, a];
    }
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }
  function task1() {
    setSt1(ref1.current.value);
  }
  function task2() {
    let curCount = st2;
    curCount++;
    setSt2(curCount);
  }
  function task3(event) {
    setSt3(event.target.value);
  }
  function task4() {
    let curCount = st4;
    curCount++;
    setSt4(curCount);
  }
  function task5(event) {
    event.target.checked ? setSt5(event.target.value) : setSt5(0);
  }
  function task6(event) {
    setSt6(event.target.value);
  }
  function task7() {
    setSt7({
      backgroundColor: `rgb(${randomInt(0, 255)},${randomInt(
        0,
        255
      )},${randomInt(0, 255)})`,
    });
  }
  function task8(event) {
    const inputValue = event.key;
    const isDigit = /^\d$/.test(inputValue);
    setSt8((prevOutput) => prevOutput + (isDigit ? '1' : '0'));
  }
  function task9(event) {
    setSt9(event.target.value);
  }
  function task10() {
    console.log(ref2.current.value);
    setSt10((val) => val + ' ' + ref2.current.value);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text" ref={ref1} />
        <button className="task-1" onClick={task1}>
          Push
        </button>
        <div>{st1}</div>
      </section>
      <section onMouseEnter={task2}>
        <h2>Task 2</h2>
        <div className="task-2"></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>
          Count
        </button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" style={st7}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            eligendi quo sapiente expedita esse, neque excepturi error tenetur
            distinctio illo totam iusto culpa necessitatibus quasi blanditiis
            sequi labore veritatis? Dolor!
          </p>
        </div>
        <button className="task-7" onClick={task7}>
          Color
        </button>
        <div>{st7.backgroundColor}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyDown={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={ref2}></input>
        <button className="task-10" onClick={task10}>
          Push
        </button>
        <div>{st10}</div>
      </section>
    </>
  );
}

export default App;
