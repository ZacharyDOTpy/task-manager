import React from 'react';
import { usestate } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import AddTask from './components/AddTask';
import UpdateTask from './components/UpdateTask';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tasks" component={TaskList} />
        <Route exact path="/tasks/add" component={AddTask} />
        <Route exact path="/tasks/:id" component={TaskDetail} />
        <Route exact path="/tasks/:id/update" component={UpdateTask} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;