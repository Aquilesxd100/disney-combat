import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Card from "../components/Card";
import { charactersList } from "../store/characters";
/* import { getCharactersList } from "../store/characters"; */
import { useStoreDispatch } from "../store/configureStore";
import { attributes, reset } from '../store/slices/slices';
import { GenerateBtn, ContainerStyle, Div, Input} from "./homeStyle";
function Home() {
  const dispatch = useStoreDispatch();
  const characters : any = useSelector((state : any) => state.setCharacters.characters);
  const charactersProcessed : any = useSelector((state : any) => state.setAttributes.characters);
  const [cardsDisplay, setCardsDisplay] = useState([]);
  const [search, setSearch] = useState("");
  let complete = false;

   useEffect(() => {
    if (complete === false) {
      let filteredCharacters = characters.map((character : any) => {
        return ({
          name: character.name,
          image: character.imageUrl,
        })
      })
        filteredCharacters.forEach((character : any) => { dispatch(attributes(character)) });
        if (charactersProcessed.length === 8) {
          setCardsDisplay(charactersProcessed); 
          complete = true;
        }
    }
  },) 
/*   let complete = true;
  function generateCards() {
    if (complete === true) {
      dispatch(charactersList());
      if (characters.length !== 8) {
        let charactersCopy = characters;
        console.log(charactersCopy);
        setTimeout(generateCards, 150);
      }
      else {
        setTimeout(configAttributes, 100);
        complete = false
      }
    }
  }
  function configAttributes() {
    let charactersCopy = characters;
    if (charactersCopy.length === 8) {
      let filteredCharacters = charactersCopy.map((character : any) => {
        return ({
            name: character.name,
            image: character.imageUrl,
        })
      })
      filteredCharacters.forEach((character : any) => { dispatch(attributes(character)) });
      setCardsDisplay(charactersProcessed);
      complete = true;
    }
    else {
      setTimeout(configAttributes, 100);
    }
  } */
  return (

    <Div>
    <GenerateBtn onClick={() => { 
        complete = false; 
        dispatch(reset());
        dispatch(charactersList()); /* generateCards() */
      }}>
      Gerar Personagens
    </GenerateBtn>
    <Input placeholder="Pesquisar..." onChange={(event) => { 
        setSearch(event.target.value);
        console.log(`Pesquisa: ${search}`)
        cardsDisplay.forEach((ele : any) => console.log(`Cards: ${ele.name}`))
      }} />
      <ContainerStyle>
        {(cardsDisplay.length !== 0 && search === "") && cardsDisplay.map((card : any) => (
          <Card name={card.name} strength={card.strength} dexterity={card.dexterity} inteligence={card.inteligence} vitality={card.vitality} image={card.image}
           /> 
        ))}  
        {search !== "" && cardsDisplay.filter((character : any) => character.name.toLowerCase().includes(search)).map((card : any) => (
            <Card name={card.name} strength={card.strength} dexterity={card.dexterity} inteligence={card.inteligence} vitality={card.vitality} image={card.image}/> 
        ))}
      </ContainerStyle>
    </Div>
  );
}

export default Home;
