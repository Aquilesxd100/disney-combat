import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { charactersList } from "../store/characters";
import { attributes } from '../store/slices/slices';
function Home() {
  const dispatch = useDispatch();
  const characters = useSelector((state : any) => state.characters);
  useEffect(() => {
    dispatch(charactersList());
  }), [dispatch];
  return (
    <>
      { characters }
    </>
  );
}

export default Home;
