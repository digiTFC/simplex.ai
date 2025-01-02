import React from 'react';

const DarkModeToggle: React.FC = () => {
  const toggleTheme = ()=>{
    document.documentElement.classList.toggle('dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded 
         'bg-gray-800 text-white' bg-gray-300 text-black
      }`}
    >
      Toggle {`dark Light Dark`} Mode
    </button>
  );
};

export default DarkModeToggle;


