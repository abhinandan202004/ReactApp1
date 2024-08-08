import Message from './message';

function App() {
  let num = 0;
  if(num)
  return <div><Message /></div>;
  else 
  return <div><h1> Error</h1></div>
}

export default App;