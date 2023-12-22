import './App.css'

import { createBrowserRouter,
         Route,
         RouterProvider,
         createRoutesFromElements
      } from "react-router-dom";

import Home from './Home';
import TaskSix from './TaskSix';
import TaskFive from './TaskFive';
import TaskFour from './TaskFour';
import TaskThree from './TaskThree';
import TaskOne from './TaskOne';
import TaskTwo from './TaskTwo';

      const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/">
            <Route index element = {<Home />} />
            <Route path="TaskOne" element={<TaskOne /> } />
            <Route path="TaskTwo" element={<TaskTwo /> } />
            <Route path="TaskThree" element={<TaskThree /> } />
            <Route path="TaskFour" element={<TaskFour /> } />
            <Route path="TaskFive" element={<TaskFive /> } />
            <Route path="TaskSix" element={<TaskSix /> } />
          </Route> 
        )
      ) 

function App() {
     
  return (
    <> 
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
