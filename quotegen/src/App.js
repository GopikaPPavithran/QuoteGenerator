import React, {useState, useEffect} from 'react';
import './App.css';
import DropdownMenu from './dropdown';
import Navbar from './navbar';


  function App() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [tags, settags] = useState('');

    const [selectedTag, setSelectedTag] = useState('');
  
    useEffect(() => {
      if (selectedTag) {
        fetchQuoteByTag(selectedTag);
      } else {
        fetchRandomQuote();
      }
    }, [selectedTag]);
  
    const fetchQuoteByTag = (tag) => {
      fetch(`http://api.quotable.io/random?tags=${tag}`)
        .then((res) => res.json())
        .then((quoteData) => {
          setQuote(quoteData.content);
          setAuthor(quoteData.author);
          // setAuthor(quoteData.tags);
        })
        .catch((error) => {
          console.log('Error fetching quote:', error);
        });
    };
  
    const fetchRandomQuote = () => {
      fetch('http://api.quotable.io/random')
        .then((res) => res.json())
        .then((quoteData) => {
          setQuote(quoteData.content);
          setAuthor(quoteData.author);
          // setAuthor(quoteData.tags);
        })
        .catch((error) => {
          console.log('Error fetching quote:', error);
        });
    };
  
    const handleSelectTag = (tag) => {
      setSelectedTag(tag);
      console.log(tag);

    };
  
    const generateNewQuote = (tag) => {
      // setSelectedTag('');
      // console.log(setSelectedTag);
    };
  
    return (
      <><div>
        <Navbar />
      </div>
      <div className="App">

          <div className="quo">
            <h2>{quote}</h2>
            <small>{author}</small>
            {/* <small>{tags}</small> */}
          </div>
          <br />

          <div>
            <DropdownMenu onSelectTag={handleSelectTag} />

          </div>

          <br />
          <button className="button" onClick={generateNewQuote}>
            New quote
          </button>
        </div></>
    );
  }
  
  export default App;