
import Nav from './Components/Nav';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './Components/BlogDetails';
import TodoHome from './Components/TodoHome';

function App() {
    return (
      <Router>
 { /* Inside return only JSX */} 
 <div className="App">
   <Nav/>
   <div className="content">
     <Switch>
       <Route exact path="/">
        <TodoHome />
       </Route>
       <Route path="/Home">
        <Home />
       </Route>
       <Route path="/blogs/:id">
        <BlogDetails />
       </Route>
     </Switch>
   </div>
        </div>
  </Router>
    );   
}

export default App;
