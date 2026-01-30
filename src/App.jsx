import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Layout</div>} />
      <Route index element={<div>HomePage</div>} />
      <Route path="tasks" element={<div>TasksPage </div>} />
    </Routes>
  );
}

export default App;
