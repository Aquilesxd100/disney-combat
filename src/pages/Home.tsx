import { useDispatch, useSelector } from 'react-redux';
import { attributes } from '../store/slices/slices';
function Home() {
  const dispatch = useDispatch();
  const characters = useSelector((state : any) => state.characters)
  return (
    <>
      {  }
    </>
  );
}

export default Home;
