import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Card from "../components/Card";
import { charactersList } from "../store/characters";
import { useStoreDispatch } from "../store/configureStore";
import { attributes, reset } from '../store/slices/slices';
import { GenerateBtn, ContainerStyle, Div} from "./homeStyle";
function Home() {
  const dispatch = useStoreDispatch();
  const characters : any = useSelector((state : any) => state.setCharacters.characters);
  const charactersProcessed : any = useSelector((state : any) => state.setAttributes.characters);
  const [cardsDisplay, setCardsDisplay] = useState([]);
  useEffect(() => {
    if (characters.length && charactersProcessed.length < 9) {
      let charactersCopy = characters;
      let filteredCharacters = charactersCopy.map((character : any) => {
        return ({
          name: character.name,
          image: character.imageUrl,
        })
      })
      filteredCharacters.forEach((character : any) => { dispatch(attributes(character)) });
      setCardsDisplay(charactersProcessed);
    }
  }, )

/*   useEffect(() => {
    console.log("foi")
    if (characters.length && charactersProcessed.length < 8) {
      let charactersCopy = characters;
      let filteredCharacters = charactersCopy.map((character : any) => {
        return ({
          name: character.name,
          image: character.imageUrl,
        })
      })
      filteredCharacters.forEach((character : any) => { dispatch(attributes(character)) });
      setCardsDisplay(charactersProcessed);
    }
  }, [characters.length && charactersProcessed.length < 8]); */
  return (

    <Div>
    <GenerateBtn onClick={() => { dispatch(charactersList());}}>
      Gerar Personagens
    </GenerateBtn>
    <GenerateBtn onClick={() => { dispatch(reset());}}>
      Reset
    </GenerateBtn>
      <ContainerStyle>
        {cardsDisplay.length !== 0 && cardsDisplay.map((card : any) => (
          <Card name={card.name} strength={card.strength} dexterity={card.dexterity} inteligence={card.inteligence} vitality={card.vitality} image={card.image}
           /> 
        ))}  
      </ContainerStyle>
    </Div>
  );
}

export default Home;
