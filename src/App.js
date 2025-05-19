import { useState, useEffect } from "react";
import ContatoForm from "./components/ContatoForm";
import ContatoLista from "./components/ContatoLista";
import Busca from "./components/Busca";
import "./App.css";

function App() {
  const [contatos, setContatos] = useState([]);
  const [contatoEditando, setContatoEditando] = useState(null);
  const [termoBusca, setTermoBusca] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  const API_URL = "http://localhost:3001/contatos";

  useEffect(() => {
    carregarContatos();
  }, []);

  const carregarContatos = () => {
    setCarregando(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setContatos(data.contatos || data); // Corrige para aceitar array ou objeto
        setCarregando(false);
      })
      .catch((err) => {
        setErro("Erro ao carregar contatos");
        setCarregando(false);
      });
  };

  const adicionarContato = (contato) => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contato),
    })
      .then((res) => res.json())
      .then((data) => {
        setContatos([...contatos, data]);
        setContatoEditando(null);
      })
      .catch((err) => setErro("Erro ao adicionar contato"));
  };

  const atualizarContato = (contato) => {
    fetch(`${API_URL}/${contato.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contato),
    })
      .then((res) => res.json())
      .then((data) => {
        setContatos(contatos.map((c) => (c.id === data.id ? data : c)));
        setContatoEditando(null);
      })
      .catch((err) => setErro("Erro ao atualizar contato"));
  };

  const deletarContato = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este contato?")) {
      fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then(() => {
          setContatos(contatos.filter((c) => c.id !== id));
        })
        .catch((err) => setErro("Erro ao deletar contato"));
    }
  };

  const contatosFiltrados = contatos.filter((contato) =>
    contato.nome.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Agenda de Contatos</h1>

      <Busca termoBusca={termoBusca} setTermoBusca={setTermoBusca} />

      <ContatoForm
        contatoEditando={contatoEditando}
        adicionarContato={adicionarContato}
        atualizarContato={atualizarContato}
        setContatoEditando={setContatoEditando}
      />

      {erro && <p className="erro">{erro}</p>}

      {carregando ? (
        <p>Carregando...</p>
      ) : (
        <ContatoLista
          contatos={contatosFiltrados}
          setContatoEditando={setContatoEditando}
          deletarContato={deletarContato}
        />
      )}
    </div>
  );
}

export default App;
