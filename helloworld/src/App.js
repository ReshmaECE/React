import React,  {Components} from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcomeclass from './Components/WelcomeClass';
import Message from'./Components/Message';
import WelcomeClass from './Components/WelcomeClass';
import Count from './Components/Count'; 
import EventBind from './Components/EventBind';
import Task1 from './Components/Task1';
import Task from './Components/Task';
import List from './Components/List';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import './appStyles.css';
import styles  from './appStyles.module.css'
import Form from './Form';
import LifeCycleA from './Components/LifeCycleA';
import LifeCycleC from './Components/LifeCycleC';
import Table from './Components/Table';
import RefsDemo from './Components/RefsDemo';
import RefFocusInput from './Components/RefFocusInput';
import FRParentInput from './Components/FRParentInput';
import PortalDemo from './Components/PortalDemo';
import FormFunComponents from './FormFunComponents';
import FormFunCoTable from './Components/FormFunCoTable';
import FormTableProject from './Components/FormTableProject';
import ProjectForm from './Components/ProjectForm'

const App = () => {
  return (
  <div className="App">



{/* <ProjectForm /> */}
  
 <FormTableProject/>

       
    {/* <FormFunCoTable /> */}

    {/* <FormFunComponents /> */}

{/* <FormFunComponents /> */}

{/* <PortalDemo />

     */}
    {/* <FRParentInput /> */}

{/* <RefFocusInput /> */}



{/* <RefsDemo /> */}
    
{/* <Table /> */}

{/* <LifeCycleC /> */}
{/* <LifeCycleA /> */}


     {/* <Form /> */}
{/* <h1 className='error'>Error</h1> */}          
{/* <h1 className={styles.success}>success</h1> */}
    {/* <Inline /> */}

    {/* <Stylesheet  container={true} /> */}
    {/* <List /> */}
{/* <Task /> */}

{/* < Task1 /> */}
{/* <Count /> */}

<Greet/>

   {/* <Greet name="Miru" age="18">
      //   <p>My Name is Miruthula</p>
      //   </Greet>
      // <Greet name="Geethu"  age="45">
      //   <button>Action</button>
       </Greet>                        
       <Greet /> 

     {/* <Welcomeclass name="lakshu" age="22">
        <button>action</button> 
      </Welcomeclass>  */}
{/* <WelcomeClass /> */}


{/* <Message /> */}
{/* <EventBind /> */}


    </div>
  );
}

export default App;
 