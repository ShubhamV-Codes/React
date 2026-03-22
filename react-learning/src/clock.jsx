import {useState, useEffect} from "react";

function Clock(){
    const [count, setCount]=useState(0);

    function incCount(){
        setCount(count => count+1);
    }
    useEffect(function(){
        let counter = setInterval(incCount, 1000) // This will only run once because its timed function so its run internally as Interval But don't do sideEffect on our Components or Environment
        return ()=>clearInterval(counter); // This will clean the code just before Unmounting Component - Its necessary to use because without it there will be big error will come in path 
    },[]); // This empty array will make sure that UseEffect will only run once while on mounting component ...

    return (<div>
    <h2> counter : {count} </h2>   {/* Here Counter will Counting automatically Because UseEffect will run automatically There is no need to start UseEffect Manually*/}
    </div>      
    )
}
export default Clock;