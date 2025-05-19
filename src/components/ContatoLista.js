function ContatoLista({ contatos, setContatoEditando, deletarContato }) {
  if (contatos.length === 0) {
    return <p>Nenhum contato encontrado.</p>;
  }

  return (
    <div className="lista-contatos">
      {contatos.map((contato) => (
        <div key={contato.id} className="contato-card">
          <h3>{contato.nome}</h3>
          <p>Telefone: {contato.telefone}</p>
          {contato.email && <p>E-mail: {contato.email}</p>}

          <div className="acoes">
            <button onClick={() => setContatoEditando(contato)}>
              ✏️ Editar
            </button>
            <button onClick={() => deletarContato(contato.id)}>
              🗑️ Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContatoLista;
