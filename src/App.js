import React, { useState } from 'react';
import Tweet from './Tweet'
function App() {
  const [isRed, setRed] = useState(false)
  const [count, setCount] = useState(12)
  const [users,setUsers] = useState([
    { name:'Ed',age: 25, post: ['my first post', 'you are are you']},
    { name:'John',age: 24, post: ['Haleluya', 'weeeeeeehahahahah']},
    { name:'Krystal',age: 21, post: ['Nicea', 'gggg']}
  ])

  const increment = () => {
    setCount(count+1)
    setRed(!isRed)
  }
  return (
    <div className="app">
      <h1 className={isRed ? 'red':" "}>Change my color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      {users.map(users => (
        <Tweet name={users.name} msg={users.post[1]}/>
      ))}
    </div>
  );
}
export default App;

