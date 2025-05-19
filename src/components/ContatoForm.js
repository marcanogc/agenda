import { useState, useEffect } from "react";

function ContatoForm({
  contatoEditando,
  adicionarContato,
  atualizarContato,
  setContatoEditando,
}) {
  const [contato, setContato] = useState({ nome: "", telefone: "", email: "" });
  const [erros, setErros] = useState({});

  useEffect(() => {
    if (contatoEditando) {
      setContato(contatoEditando);
    } else {
      setContato({ nome: "", telefone: "", email: "" });
    }
  }, [contatoEditando]);

  const validar = () => {
    const novosErros = {};
    if (!contato.nome) novosErros.nome = "Nome é obrigatório";
    if (!contato.telefone) novosErros.telefone = "Telefone é obrigatório";
    if (contato.email && !contato.email.includes("@"))
      novosErros.email = "E-mail inválido";
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      if (contatoEditando) {
        atualizarContato(contato);
      } else {
        adicionarContato(contato);
      }
      setContato({ nome: "", telefone: "", email: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContato({ ...contato, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="form-contato">
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={contato.nome}
          onChange={handleChange}
        />
        {erros.nome && <span className="erro">{erros.nome}</span>}
      </div>

      <div>
        <label>Telefone:</label>
        <input
          type="text"
          name="telefone"
          value={contato.telefone}
          onChange={handleChange}
        />
        {erros.telefone && <span className="erro">{erros.telefone}</span>}
      </div>

      <div>
        <label>E-mail:</label>
        <input
          type="text"
          name="email"
          value={contato.email}
          onChange={handleChange}
        />
        {erros.email && <span className="erro">{erros.email}</span>}
      </div>

      <div className="botoes">
        <button type="submit">
          {contatoEditando ? "Atualizar" : "Salvar"}
        </button>
        {contatoEditando && (
          <button type="button" onClick={() => setContatoEditando(null)}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default ContatoForm;
