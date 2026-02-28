import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

const TasksPage = lazy(() => import('./pages/TasksPage/TasksPage'));
const WorkPage = lazy(() => import('./pages/WorkPage/WorkPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<div>HomePage</div>} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="english" element={<div>English </div>} />
        <Route path="work" element={<WorkPage />} />
      </Route>
    </Routes>
  );
}

export default App;
