import { useState } from 'react'

import './App.css'
import MyClassComp from './components/MyClassComp';
import MyFcComp from './components/MyClassComp';
import CountComp from './components/CountComp';
import CounterComponent from './components/CounterComponent';
import ParentComp from './components/ParentComp';
import MyColorsComp from './components/MyColorsComp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import CounterIncrement from './components/CounterIncrement';
import HoverCounterInc from  './components/HoverCounterInc'
import RefComp from './components/RefComp';
import ErrorBoundary from './components/ErrorBoundary';
import User from './components/User';
import UserForm from './components/UserForm';
import {BrowserRouter,Router,Route, Routes} from 'react-router-dom';
import ToggleImg from './components/ToggleImg';
import PageNotFound from './components/PageNotFound';
import {Card,Button} from 'react-bootstrap';
import Nav from './components/Nav';
import FavColor from './components/FavColor';
import UsseStateComps from './components/UsseStateComps';
import Dashboard from './CRUD/Dashboard';
import Add from './CRUD/Add';
import Edit from './CRUD/Edit'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello it's me Tejas</h1>
        <BrowserRouter>
        <Card className="text-center border-primary">
      <Card.Header className='border-primary'>
        <Nav/>
      </Card.Header>
      <Card.Body>
      <Routes>
        <Route path='UserForm' element={<UserForm/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='add' element={<Add/>}/>
        <Route path='edit/:id' element={<Edit/>}/>
        <Route path='usestate' element={<UsseStateComps/>}/>
            <Route path='toggleImg' element={<ToggleImg/>}>
            <Route path='ref' element={<RefComp/>}/> </Route> 
            <Route path='favcolor' element={<FavColor color="Blue"/>}/>
           
            {/* <Route path="*" element={<PageNotFound />} />    */}
          </Routes>
      </Card.Body>
      <Card.Footer className="text-muted border-primary"><p>Made by <strong>Teja</strong></p></Card.Footer>
      
    </Card>
        
         

        </BrowserRouter>
       {/* <MyClassComp name="Tejas" post="Software Developer"/>
       <MyFcComp name="Tejas" post="Software Developer"/>
       <CountComp institute="YCP CDAC"/>
       <CounterComponent/> */}
       {/* <ToggleImg/> */}
       {/* <ParentComp/> */}
       {/* <MyColorsComp/> */}
       {/* <Component1/> */}
       {/* <CounterIncrement/>
       <HoverCounterInc/> */}
       {/* <RefComp/> */}
       {/* <ErrorBoundary><User name="Suraj"/></ErrorBoundary>
    <ErrorBoundary><User name="Abhishek"/></ErrorBoundary>
    <ErrorBoundary><User name="Rahul"/></ErrorBoundary> */}
    {/* <UserForm/> */}
  
      </div>
    </>
  )
}

export default App
