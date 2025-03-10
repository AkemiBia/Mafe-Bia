import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

const HomePage = () => {
  const [items, setItems] = useState<string[]>([]);
  const [randomItem, setRandomItem] = useState<string | null>(null);

  // Pega a lista do banco de dados
  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase.from('things_to_watch').select('name');
      if (error) {
        console.error(error);
        return;
      }
      setItems(data.map((item) => item.name));
    };

    fetchItems();
  }, []);

  const handleRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setRandomItem(items[randomIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white fade-in">
      <h1 className="text-4xl font-bold mb-6 mt-2">Coisas pra Bia e pra Mafe assistirem</h1>

      <div className="mb-6">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-center border-b-2 border-pink-400 pb-2">
              <span className="mr-2 text-pink-500 text-xl">♡</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleRandomItem}
        className="bg-white text-pink-500 py-2 px-4 rounded"
      >
        Sortear uma coisa aleatória
      </button>

      {randomItem && <p className="mt-4">Sorteio: {randomItem}</p>}
    </div>
  );
};

export default HomePage;
