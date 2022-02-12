import './App.css';
import {useEffect, useState} from 'react'
import List from './components/list';

function App() {
  const [list, setList] = useState([])
  const [count, setCount] = useState(1)
  

 //consigo fazer console.log, mais nao joga dentro da lista
  // useEffect (()=>{
    
  //   fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
  //   .then((response) => response.json())
  //   // .then((response) => response.results.map((item) => console.log(item)))
  //   .then((response) => setList([...list, response.results]))
    
    

  // }, [count]);


  // function contador(){
  //   count < 3 ? (setCount(count+1)) : (console.log('cabo'))

  // }
  


    useEffect (()=>{
    
        fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)

          .then((response) => response.json())
          .then((response) => setList(response.results))          
          .catch((err)=> alert(`Ops! algo saiu mal! ${err}`))
        
    
  }, [count]);



  function alternar(text){   
    
    if(text === 'prox' && count === 42){
        setCount(42)
      }else if(text === 'prox'){
        setCount(count +1)
        }else if(text ==='ant' && count === 1){
          setCount(1)
          }else{setCount(count  - 1)}

  }
  
  




  return (
    <div className="App">
      <List list={list} alternar={alternar} count={count}/>
     

    </div>
  );
}

export default App;
