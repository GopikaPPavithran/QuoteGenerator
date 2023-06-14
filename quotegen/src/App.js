import React, {useState, useEffect} from 'react';
import './App.css';
import DropdownMenu from './dropdown';


function App() {

  const [quote,setQuote]=useState("");
  const [author,setAuthor]=useState("");
  const[tagname,setTagName]=useState("");
  const[tagid,setTagid]=useState("");
  const[selectedTag,setselectedTag]=useState("");

  http://api.quotable.io/random

  useEffect(()=>{
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quotes => {
        setQuote(quotes.content);
        setAuthor(quotes.author);
      }
      )
    )
  },[]);


  let Newquote = () =>{
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quotes => {
        setQuote(quotes.content);
        setAuthor(quotes.author);
      }
      )
    )
  }




  return (
    <div className="App">
      <div className ="quo">
        <h2>{quote}</h2>
        <small>{author}</small>
      </div> 
      <br></br>
      <div>
        <DropdownMenu/>
      </div>

    <br></br>
      <button className="button" onClick={Newquote} >Generate new quote</button>
    </div>
  );
  }

export default App;


