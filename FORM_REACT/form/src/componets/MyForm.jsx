import "./MyForm.css";


import { useState } from "react";

const MyForm = () => {
    //3- gerenciamento de dados
    const[name, setName] = useState("");
    const[email, setEmail] = useState();

    const[role, setRole] = useState("");

    const[bio, setBio] = useState("");
  //3-pegar valor do input
    const handleName = (e) => {
      setName(e.target.value);

    };
    console.log(name, email, bio, role)


    const handleSubmit = (e) =>{
      e.preventDefault();
      
      
    //validação 
    //envio

    // 7 -limpar formulário
      setEmail("");
      setName("");
      setBio("")


    };


 
  return (
    <div>
      {/*1-criação de form */}
      {/*5-envio de form */}
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name"placeholder="Digite seu nome" onChange={handleName}
            //6 controlled input
            value={name} />
        </div>
        {/*2- label envolvendo o input*/}
        <label>
            <span>E-mail</span>
            {/*4- simplificando manipulação*/}
            <input type="text" name="email" 
            placeholder="Difite seu e-mail" onChange={(e)=> setEmail(e.target.value)}
            //6-controlled input
            value={email || ""}/>
        </label>
        {/*8 - textarea*/}
        <label>
          <span>Bio:</span>
        <textarea name="bio" placeholder="Descrição do usuário" onChange={(e)=> setBio(e.target.value)} value={bio}></textarea>
        </label>
        {/*9 - select */}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e)=>{e.target.value}}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
