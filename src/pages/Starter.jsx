import { useState } from "react";

 function Starter() {
 
  return (
    <div
      className="relative flex items-center justify-center min-h-screen 
      bg-gradient-to-r from-yellow-300 via-red-400 to-blue-400 
      animate-gradient overflow-hidden"
    >
      {/* Floating Pokeballs */}
      <img src="/pokeball.png" alt="pokeball" className="pokeball absolute w-10 top-10 left-10" />
      <img src="/pokeball.png" alt="pokeball" className="pokeball absolute w-14 bottom-20 right-16" />
      <img src="/pokeball-opened.png" alt="pokeball" className="pokeball absolute w-12 top-1/3 left-1/2" />
      <img src="/pokeball.png" alt="pokeball" className="pokeball absolute w-12 bottom-1/4 left-1/4" />
      <img src="/pokeball.png" alt="pokeball" className="pokeball absolute w-12 top-10 right-10" />
      <img src="/pokeball.png" alt="pokeball" className="pokeball absolute w-14 bottom-20 left-16" />
      <img src="/pokeball.png" alt="pokeball" className="pokeball absolute w-12 bottom-1/4 right-1/4" />

      {/* Pokémon GIFs with synced animations */}
      <img src="/pikachu-ready.gif" alt="Pikachu" className="absolute left-20 top-1/2 z-30 w-60 pikachu" />
      <img src="/charizard-fry.gif" alt="Charizard" className="absolute left-20 top-1/3 z-30 w-80 charizard" />
      <img src="/Blastoise.gif" alt="Blastoise" className="absolute right-10 bottom-16 z-30 w-70 blastoise" />
      

      {/* Main content card */}
      <div className="relative z-40 p-8 rounded-2xl shadow-lg text-center max-w-2xl mx-4 ">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-800">Welcome to Pokeverse</h1>
        <p className="text-2xl mb-6 text-gray-700">Explore the world of Pokémon!</p>
        <button className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition ">
          Get Started
        </button>
      </div>
    </div>
  );
}
export default Starter;
