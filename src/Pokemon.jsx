import { useState, useEffect } from 'react';
import './App.css'
import pokeLogo from './assets/pokeLogo.png'


export default function Pokemon() {
  //stroe result for APi
  const [bio, setBio] = useState(null);
  //store input text value
  const [inputSearch, setInputSearch]= useState('ditto');
  //store the character to search when button picked
  const [searchCharacter, setSearchCharacter]=useState('ditto');

  useEffect(() => {
    // Fetch data from API
    async function fetchData() {
        const url= 'https://pokeapi.co/api/v2/pokemon/' + searchCharacter;
        console.log(url)
      const response = await fetch(url); 
      if(response.ok){
        const data = await response.json();
        if (!ignore) {
          setBio(data);       ///ensures clean up happens
        }
      }else{
        setBio(null);
      }
    }

    let ignore = false;
    fetchData();
    return () => {
       ignore = true;
    }
  }, [searchCharacter]);


  function search(e) {
    e.preventDefault(); ///prevent to sent the form to the data automaticaly
    setSearchCharacter(inputSearch.toLowerCase());

  }

  return (
    <>
    <img src={pokeLogo} className="logo" alt="Poke logo" />
    <form>
        <input type="text" value={inputSearch} onChange={e => setInputSearch(e.target.value)} />&nbsp;&nbsp;
        <button type="submit" onClick={search}>Search</button>
      </form>

      <hr/>
      { bio ? 
        <div>
            <img src={bio.sprites.front_default} alt={bio.name} />
          <h1>{ bio.name }</h1> 
             
                <p>Weight: {bio.weight } lbs</p> 
                <p>Height: {bio.height } ft</p>
                <p>Base Experienc: {bio.base_experience } </p>
            
            
            <h3>Abilities</h3>
            <ul>
                {bio.abilities.map((item, index)=>{
                  return <li key={index}>{item.ability.name}</li>
              })}
            </ul>
            <hr />

        </div>:
        <p> Not a valid character. Try Again</p>
        }
    </>    
  );
}
