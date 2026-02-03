import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<div>HomePage</div>} />
        <Route path="tasks" element={<div>TasksPage </div>} />
        <Route path="english" element={<div>English </div>} />
      </Route>
    </Routes>
  );
}

export default App;
