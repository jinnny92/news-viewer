import { useState } from 'react';
import './App.css';
import { useCallback } from 'react';
import { Route, Routes } from '../node_modules/react-router-dom/index';
import NewsPage from './pages/NewsPage';
function App() {
  return (
    <Routes>
      <Route index element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
