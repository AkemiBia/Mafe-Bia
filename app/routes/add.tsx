// app/routes/add.tsx
import { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

const AddItemPage = () => {
  const [name, setName] = useState('');

  const handleAddItem = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name) return;

    const { error } = await supabase.from('things_to_watch').insert([{ name }]);
    if (error) {
      console.error(error);
    } else {
      setName('');
      alert('Coisa adicionada com sucesso!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold mb-6">Adicionar Coisa para Assistir</h1>
      <form onSubmit={handleAddItem} className="mb-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o nome"
          className="p-2 rounded"
        />
        <button
          type="submit"
          className="ml-4 bg-white text-pink-500 py-2 px-4 rounded"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default AddItemPage;
