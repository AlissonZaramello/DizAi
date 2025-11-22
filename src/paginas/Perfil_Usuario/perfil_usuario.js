import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import './perfil_usuario.css';
import { BsPencilSquare } from "react-icons/bs";
import { API_URL } from '../../config/config';

export default function Perfil() {
  const [editMode, setEditMode] = useState({
    nome: false,
    email: false,
    senha: false,
  });

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const [mensagem, setMensagem] = useState('');
  const [usuarioId, setUsuarioId] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (storedUser && storedUser.id) {
      setUsuarioId(storedUser.id);

      fetch(`${API_URL}/usuarios/${storedUser.id}`)
        .then(res => res.json())
        .then(data => {
          setFormData({
            nome: data.nome,
            email: data.email,
            senha: "" 
          });
        })
        .catch(err => console.error("Erro ao carregar usuário:", err));
    }
  }, []);

  const handleToggleEdit = (campo) => {
    setEditMode(prev => ({
      ...prev,
      [campo]: !prev[campo]
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!usuarioId) return;

    const bodyToSend = { ...formData };
    if (!editMode.senha || formData.senha.trim() === "") {
      delete bodyToSend.senha;
    }

    try {
      const response = await fetch(`${API_URL}/usuarios/${usuarioId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyToSend)
      });

      if (!response.ok) throw new Error('Erro ao atualizar usuário');

      const updatedUser = await response.json();

      const userToStore = {
        id: updatedUser.id,
        nome: updatedUser.nome,
        email: updatedUser.email,
        token: updatedUser.token || JSON.parse(localStorage.getItem("usuarioLogado"))?.token
      };

      localStorage.setItem('usuarioLogado', JSON.stringify(userToStore));

      setMensagem('Dados atualizados com sucesso!');
      setEditMode({ nome: false, email: false, senha: false });

      setTimeout(() => setMensagem(''), 3000);
    } catch (err) {
      console.error(err);
      setMensagem('Falha ao atualizar dados');
    }
  };

  const respostas = [];

  return (
    <div className="Fundo_Perfil">
      <div className="Painel">
        <form className="Tabela_Perfil" onSubmit={handleSubmit}>

          {/* Nome */}
          <label htmlFor="nome">Nome do Usuário</label>
          <div className="Dados_Perfil">
            <input
              required
              type="text"
              id="nome"
              name="nome"
              className="Dados"
              value={formData.nome}
              onChange={handleChange}
              readOnly={!editMode.nome}
            />
            <button type="button" className="Edit_Button" onClick={() => handleToggleEdit("nome")}>
              <BsPencilSquare size={20} color={editMode.nome ? '#04D9B2' : 'black'} />
            </button>
          </div>

          {/* Email */}
          <label htmlFor="email">Email</label>
          <div className="Dados_Perfil">
            <input
              required
              type="email"
              id="email"
              name="email"
              className="Dados"
              value={formData.email}
              onChange={handleChange}
              readOnly={!editMode.email}
            />
            <button type="button" className="Edit_Button" onClick={() => handleToggleEdit("email")}>
              <BsPencilSquare size={20} color={editMode.email ? '#04D9B2' : 'black'} />
            </button>
          </div>

          {/* Senha */}
          <label htmlFor="senha">Senha</label>
          <div className="Dados_Perfil">
            <input
              type="password"
              id="senha"
              name="senha"
              className="Dados"
              placeholder="••••••••"
              value={formData.senha}
              onChange={handleChange}
              readOnly={!editMode.senha}
            />
            <button type="button" className="Edit_Button" onClick={() => handleToggleEdit("senha")}>
              <BsPencilSquare size={20} color={editMode.senha ? '#04D9B2' : 'black'} />
            </button>
          </div>

          {mensagem && (
            <p style={{ color: '#00b327ff', fontWeight: 'bold', marginTop: '10px' }}>
              {mensagem}
            </p>
          )}

          <div className="Alterar-botao-area">
            <button className="Alterar-botao" type="submit">Alterar</button>
          </div>
        </form>

        {/* Empty table placeholder */}
        <Table className="Avaliacao-Pesona">
          <TableHeader>
            <TableRow>
              <TableHead className="Titulo-Tabela">Título/Razão</TableHead>
              <TableHead className="Titulo-Tabela">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {respostas.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.titulo}</TableCell>
                <TableCell className="font-medium">{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </div>
    </div>
  );
}
