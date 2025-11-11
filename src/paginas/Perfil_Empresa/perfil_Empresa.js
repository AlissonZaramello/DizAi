import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { BsPencilSquare } from "react-icons/bs";
import "./perfil_Empresa.css";

export default function Perfil_Empresa() {
  const [editMode, setEditMode] = useState({
    nome: false,
    email: false,
    senha: false,
  });

  const [formData, setFormData] = useState({
    nome: "Seu Nome",
    email: "seu@email.com",
    senha: "123456",
    img: "",
  });

  const handleToggleEdit = (campo) => {
    setEditMode((prev) => ({
      ...prev,
      [campo]: !prev[campo],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados salvos:", formData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          img: reader.result, // Salva a imagem em base64
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const resposta = [
    { titulo: "Produto entregue com atraso", status: "Resolvida" },
    { titulo: "Produto entregue com atraso", status: "Não resolvida" },
    { titulo: "Produto entregue com atraso", status: "Resolvida" },
    { titulo: "Produto entregue com atraso", status: "Em andamento" },
  ];

  return (
    <div className="Fundo_Perfil_Empresa">
      <div className="Painel_Empresa">
        <form className="Tabela_Perfil_Empresa" onSubmit={handleSubmit}>
          <div className="Perfil-Imagem-Container">
            <img
              className="Img_Perfil"
              src={formData.img || "https://via.placeholder.com/100?text=Foto"}
              alt="Profile"
            />

            <div className="Perfil-Botoes-Imagem">
              <label htmlFor="image-upload" className="Botao-Imagem Alterar-Foto">
                Alterar
              </label>

              {formData.img && (
                <button
                  type="button"
                  className="Botao-Imagem Remover-Foto"
                  onClick={() => setFormData((prev) => ({ ...prev, img: "" }))}
                >
                  Remover
                </button>
              )}
            </div>

            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>

          {/* Campo: Nome */}
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
            <button
              type="button"
              className="Edit_Button"
              onClick={() => handleToggleEdit("nome")}
            >
              <BsPencilSquare
                size={20}
                color={editMode.nome ? "#04D9B2" : "black"}
              />
            </button>
          </div>

          {/* Campo: Email */}
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
            <button
              type="button"
              className="Edit_Button"
              onClick={() => handleToggleEdit("email")}
            >
              <BsPencilSquare
                size={20}
                color={editMode.email ? "#04D9B2" : "black"}
              />
            </button>
          </div>

          {/* Campo: Senha */}
          <label htmlFor="senha">Senha</label>
          <div className="Dados_Perfil">
            <input
              required
              type="password"
              id="senha"
              name="senha"
              className="Dados"
              value={formData.senha}
              onChange={handleChange}
              readOnly={!editMode.senha}
            />
            <button
              type="button"
              className="Edit_Button"
              onClick={() => handleToggleEdit("senha")}
            >
              <BsPencilSquare
                size={20}
                color={editMode.senha ? "#04D9B2" : "black"}
              />
            </button>
          </div>

          {/* Botão Alterar */}
          <div className="Alterar-botao-area">
            <button className="Alterar-botao" type="submit">
              Alterar
            </button>
          </div>
        </form>

        {/* Tabela de Avaliações */}
        <Table className="Avaliacao-Pesona">
          <TableHeader>
            <TableRow>
              <TableHead className="Titulo-Tabela">Título/Razão</TableHead>
              <TableHead className="Titulo-Tabela">Avaliação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resposta.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.titulo}</TableCell>
                <TableCell className="font-medium">
                  <span
                    style={{
                      color:
                        item.status === "Não resolvida"
                          ? "#C50000"
                          : item.status === "Resolvida"
                          ? "#00B327"
                          : item.status === "Em andamento"
                          ? "#666"
                          : "#000",
                    }}
                  >
                    {item.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
