import React from 'react';
import './App.css';
import HookCounter from './Components/HookCounter';
import HookUSeStateArr from './Components/HookUSeStateArr';
import HookUseStateObj from './Components/HookUseStateObj';
import HookuseEffect from './Components/HookuseEffect';
import HookuseEffectMouseEvent from './Components/HookuseEffect-MouseEvent';
import HookuseEffectMouseRemove from './Components/HookuseEffectMouseRemove';
import HookuseEffectsetTimer from './Components/HookuseEffectsetTimer';
import HookDataFetching from'./Components/HookDataFetching';
import ProjectFetchData from './Components/ProjectFetchData';
//import HookContextA from './Components/HookContextA';
//import React from 'react';










//  export const  UserFirstNameContext= React.createContext()
//   export const UserLastNameContext=React.createContext()

function App() {
  return (
    <div className="App">
              
{/* <UserFirstNameContext.Provider value={"Reshma"}>
  <UserLastNameContext.Provider value={"Reshu"}> 
<HookContextA />
 </UserLastNameContext.Provider> 
</UserFirstNameContext.Provider> */}















<ProjectFetchData />
{/* <HookDataFetching /> */}
       {/* <HookuseEffectsetTimer />  */}

      {/* <HookuseEffectMouseRemove /> */}
      {/* <HookuseEffectMouseEvent  /> */}


{/* <HookuseEffect /> */}

{/* <HookUSeStateArr /> */}















{/* <HookUseStateObj /> */}
{/* <HookCounter /> */}
      
    </div>
  );
}

export default App;
