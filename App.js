
import { useState } from 'react';
import './App.css';

function App() {
  const [cards]=useState([
   {
    title: 'Animal',
    text:  'Unlimited Jokes on Animal'
   },
   {
    title: 'Carrer',
    text:  'Unlimited Jokes on Carrer'
   },
   {
    title: 'Celebrity',
    text:  'Unlimited Jokes on Celebrity'
   },
   {
    title: 'Dev',
    text:  'Unlimited Jokes on Dev'
   },
   {
    title: 'Explicit',
    text:  'Unlimited Jokes on Explicit'
   },
   {
    title: 'Fashion',
    text: 'Unlimited Jokes on Fashion'
   },
   {
    title: 'Food',
    text:  'Unlimited Jokes on Food'
   },
   {
    title: 'History',
    text:  'Unlimited Jokes on History'
   },
   {
    title: 'Money',
    text:  'Unlimited Jokes on Money'
   },
   {
    title: 'Movie',
    text:  'Unlimited Jokes on Movie'
   },
   {
    title: 'Music',
    text:  'Unlimited Jokes on Music'
   },
   {
    title: 'Political',
    text:  'Unlimited Jokes on Political'
   },
   {
    title: 'Religion',
    text:  'Unlimited Jokes on Religion'
   },
   {
    title: 'Science',
    text:  'Unlimited Jokes on Science'
   },
   {
    title: 'Sport',
    text:  'Unlimited Jokes on Sport'
   },
   {
    title: 'Travel',
    text:  'Unlimited Jokes on Travel'
   },
  ])
  const [selectedCard, setSelectedCard] = useState(null);

  

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
    
  };
  const handleQuoteClose = () => {
    setSelectedCard(null);
  };


  return (
    <div>
      <section>
        <div  className="container">
          <h1>Chuck Norries</h1>
          <div className="cards">
            {cards.map((card,i) =>(
                <div 
                     key ={i} 
                     className={`card ${selectedCard === i ? 'selected' : ''}`}
                     onClick={() => handleCardClick(i)}>
                 
                    <h3>
                    <a href="#" onClick={() => handleCardClick(i)}>
                        {card.title}
                    </a>
                    </h3>  
                    <p>{card.text}</p>
                  </div>          
               ))}
             </div> 
            {selectedCard !== null && (
            <div className="quote-card">
              <div className="quote-box">
                <p>
                  Chuck Norris doesn't read books. He stares them down until he gets the information he wants.
                </p>
                <button className="close-button" onClick={handleQuoteClose}>
                  <span>&times;</span>
                </button>
              </div>
            </div>
          )}

      </div>
  </section>
</div> 
);
}

export default App;
