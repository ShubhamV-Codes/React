import CustomHookOne from "./CustomHookOne";
import FetchHook from "./FetchHook";
function App() {

  return (
    <>
      <h1 style={{textAlign:"center"}}>Custom Hooks : 23/03/2026</h1>
      <CustomHookOne /> {/*First Custom Hook -> Here we created counter custom Hook */}
      <FetchHook />
    </>
  )
}

export default App;
