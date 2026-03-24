import {useRecoilValue, useSetRecoilState, RecoilRoot} from 'recoil';
import {counterAtom, evenSelector} from './store/atoms/counter';




function Button() {
  const setCount = useSetRecoilState(counterAtom);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Increment
    </button>
  );
}
function Counter() {
  const count = useRecoilValue(counterAtom);

  return <h1>Count: {count}</h1>;
}
function IsEven() {
  const isEven = useRecoilValue(evenSelector);

  return <h2>{isEven ? "Even" : "Odd"}</h2>;
}

function Selector(){
    return(
        <>
        <RecoilRoot>
            <Button />
            <Counter />
            <IsEven />
        </RecoilRoot>
        </>
    )
}

export default Selector;