import react,{useState,useEffect} from "react";
import './App.css';
import axios from "axios";
import Game from "./componets/game";

function App() {
 const [regis,setRegis]=useState();
 const [games,setGames] = useState();
 const {put,setPut} = useState();
 const [get ,setGet]=useState();
 const handleClick =(value)=>{
setRegis((prevValue)=>({...prevValue,
 [value.target.name]: value.target.value}))

 }
const handleClickButton = ()=>{
  axios.post("http://localhost:3001/register",
   {name : regis.name,
    cost :regis.cost,
    category:regis.category}
  
  

  
  ).than((response)=>console.log(response))

}
useEffect(()=>{
  axios.get("http://localhost:3001/games").then((response)=>setGames(response.data))
},[])

  return (
    <>
    <div className='id1'>
   <section className='conatiner'>
    <h1>Punk Shop</h1>
    <input type="text"name='name' placeholder='Nome'className='input1' onChange={handleClick}/>
    <input type="text"name='cost' placeholder='preço'className='input2' onChange={handleClick}/>
    <input type="text" name='category' placeholder='categoria'className='input3' onChange={handleClick}/>
    <button className='button' onClick={handleClickButton}>Cadastrar</button>
   
   </section>
   {(typeof games !== "undefined")&& games.map((value)=>{
    return (<Game key={value.idgames}
                id={value.idgames}
                name={value.name}
                cost = {value.cost}
                 category={value.category}
                 
                  setGames={games}></Game>)
   })}
   
   </div>
   </>
  );
}

export default App;
