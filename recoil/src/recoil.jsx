import {RecoilRoot, atom, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {counterAtom} from './store/atoms/counter';


function CurrentCount (){
    const counter = useRecoilValue(counterAtom);
    return (
        <>
        {counter}
        </>
    )
}

function Increase(){
    const setCounter = useSetRecoilState(counterAtom);
    function inc(){
        setCounter(c=>c+1);
    }
    return(
    <>
    <button onClick={inc}> Increment </button>
    </>
    )
}

function Decrease(){
    const setCounter = useSetRecoilState(counterAtom);
    function dec(){
        setCounter(c=>c-1);
    }
    return(
    <>
    <button onClick={dec}> Decrement </button>
    </>
    )
}

function Counter (){
    return (
        <>
        <CurrentCount />
        <Increase />
        <Decrease />
        </>
    )
}

function Recoil(){
    return (
        <RecoilRoot>
         <Counter />
        </RecoilRoot>
    )
}

export default Recoil ;