function Busca({ termoBusca, setTermoBusca }) {
  return (
    <div className="busca">
      <input
        type="text"
        placeholder="Buscar contato..."
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
      />
    </div>
  );
}

export default Busca;
