import React, { useState } from 'react';
import CategorySelector from './components/CategorySelector';
import NewsList from './components/NewsList';

const App: React.FC = () => {
  const [category, setCategory] = useState<string>('TOP');

  return (
    <div>
      <header>
        <h1>My News App</h1>
      <CategorySelector 
        selectedCategory={category} onSelectCategory={setCategory} />
      </header>
      <div className='list'>
        <NewsList category={category} />
      </div>
    </div>
  );
};

export default App;
