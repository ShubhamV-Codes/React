import {useFetch} from "./hooks/useFetch.js";
import {FetchLearning} from "./material/hooks.jsx"

function FetchHook(){
    const PostTitle = useFetch("https://jsonplaceholder.typicode.com/posts/1");
    return(
        <>
          <h2 style ={{color:"#292381"}}>2.Calling a Custom Hook [useFetch] to request Backend for Data [Hook:useFetch]</h2>
          <span ><i>Data Coming from API [<b>user-defined</b>] request : </i><b>{PostTitle.title}</b></span>
          <FetchLearning />
        </>
    )
}

export default FetchHook ;