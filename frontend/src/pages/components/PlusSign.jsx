function PlusButton({ onClick }) {
  return (
    <button onClick={onClick} className="bg-slate-300 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded-full">
      +
    </button>
  );
}

export default PlusButton;
