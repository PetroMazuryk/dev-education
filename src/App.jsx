import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

const TasksPage = lazy(() => import('./pages/TasksPage/TasksPage'));
const WorkPage = lazy(() => import('./pages/WorkPage/WorkPage'));
const EnglishPage = lazy(() => import('./pages/EnglishPage/EnglishPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<div>HomePage</div>} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="english" element={<EnglishPage />} />
        <Route path="work" element={<WorkPage />} />
      </Route>
    </Routes>
  );
}

export default App;
