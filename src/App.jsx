import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

const TasksPage = lazy(() => import('./pages/TasksPage/TasksPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<div>HomePage</div>} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="english" element={<div>English </div>} />
        <Route path="work" element={<div>Work</div>} />
      </Route>
    </Routes>
  );
}

export default App;
