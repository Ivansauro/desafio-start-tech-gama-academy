import { useState,} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './App.css';

const FormInput = styled.input`
border: 1px solid black;
margin: 3px 20px;
padding: 5px;
width: 200px;

`;

const FormLabel = styled.label`
margin: 3px 20px;
font-size: 16px;
display: block
`;

const ErrorSpan = styled.span`
  color: red;
  align-self: center;
  font-size: 20px;
  padding:10px;
  margin: 20px 20px;
  display: ${(props) => props.isError ? 'block' : 'none'};
`;


const App = () => {

  const fetchAddress = async () => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    console.log(address);
    console.log(address.status);
    if (address.status === 200){
      setForm({ ...form, endereco: address.data.logradouro });      
    } else {
      alert('CEP não encontrado!');
    }
    
  };

  const createCandidate = async (candidate) => {
    try {
      const user = await axios.post('http://localhost:5000/register', form);
      if (user.status === 200) {
        alert('Candidato cadastrado com sucesso!');
      }

    } catch (error) {
      setCpfError(true);
    }
  };

  const [form, setForm] = useState({
    nome: '',
    cargo: '',
    nascimento: '',
    civil: '',
    genero: '',
    endereco: '',
    bairro: '',
    cidade: '',
    cep: '',
    tel1: '',
    tel2: '',
    cel: '',
    contato: '',
    email: '',
    identidade: '',
    cpf: '',
    veiculo: '',
    cnh: ''
  });

  const [cpfError, setCpfError] = useState(false);

  



  return (
    
    <div className="App">
    <header className="App-geral">
    <div className="headerJobs">

        <div>         
         <p>Jobsnet</p>
        </div>
        
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Ivansauro"> Github </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="mailto:ivanei9@gmail.com"> E-mail</a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ivanei"> LinkedIn</a>
                </li>               
        
            </ul>
        
    </div>
      <form>
      <p className="secoes">Dados Pessoais</p>
      <div className="dadosPessoais">
            <div>       
        <FormLabel>Nome<span className="App-span"> *</span></FormLabel>
        <FormInput onChange={(e) => {
          setForm({ ...form, nome: e.target.value });
        }} value={form.nome}></FormInput>
      </div>
      <div>
        <FormLabel>Cargo pretendido</FormLabel>
        <FormInput onChange={(e) => {
          setForm({ ...form, cargo: e.target.value });
        }} value={form.cargo}></FormInput>
      </div>
      <div>
        <FormLabel>Data de nascimento<span className="App-span"> *</span></FormLabel>
        <FormInput type="date" onChange={(e) => {
          setForm({ ...form, nascimento: e.target.value });
        }} value={form.nascimento}></FormInput>
      </div>
      <div>
        <FormLabel>Estado civil</FormLabel>
        <select className="App-select" name="civil" id="civil" onChange={(e) => {
          setForm({ ...form, civil: e.target.value });
        }} value={form.civil}>
         <option value=""> </option>
         <option value="Solteire">Solteire</option>
         <option value="Casade">Casade</option>
         <option value="Em união estável">Em união estável</option>
         <option value="Divorciade">Divorciade</option>
         <option value="Separade">Separade</option>
         <option value="Viúve">Viúve</option>
        </select>        
      </div>
      <div>
        <FormLabel>Gênero</FormLabel>
        <select className="App-select" name="genero" id="genero" onChange={(e) => {
          setForm({ ...form, genero: e.target.value });
        }} value={form.genero}>
         <option value=""> </option>
         <option value="Mulher trans">Mulher trans</option>
         <option value="Mulher cis">Mulher cis</option>
         <option value="Homem trans">Homem trans</option>
         <option value="Homem cis">Homem cis</option>
         <option value="Não-binário">Não-binário</option>
         <option value="Agênero">Agênero</option>
         <option value="Queer">Queer</option>
         <option value="Outro">Outro</option>
         </select>     
         </div>   
         <div>         
        <FormLabel>CEP</FormLabel>
        <FormInput placeholder="Somente números"onBlur={() => {
          fetchAddress();
        }} onChange={(e) => {
          setForm({ ...form, cep: e.target.value });
        }} value={form.cep}></FormInput>        
      </div>
      <div>
        <FormLabel>Endereço</FormLabel>
        <FormInput onChange={(e) => {
          setForm({ ...form, endereco: e.target.value });
        }} value={form.endereco}></FormInput>
      </div>
      <div>
        <FormLabel>Bairro<span className="App-span"> *</span></FormLabel>
        <FormInput onChange={(e) => {
          setForm({ ...form, bairro: e.target.value });
        }} value={form.bairro}></FormInput>
      </div>
      <div>
        <FormLabel>Cidade<span className="App-span"> *</span></FormLabel>
        <FormInput onChange={(e) => {
          setForm({ ...form, cidade: e.target.value });
        }} value={form.cidade}></FormInput>
      </div>      
      <div>
        <FormLabel>Telefone 1</FormLabel>
        <FormInput onChange={(e) => {
          setForm({ ...form, tel1: e.target.value });
        }} value={form.tel1}></FormInput>
      </div>
      <div>
        <FormLabel>Telefone 2</FormLabel>
        <FormInput onChange={(e) => {
          setForm({ ...form, tel2: e.target.value });
        }} value={form.tel2}></FormInput>
      </div>
      <div>
        <FormLabel>Celular</FormLabel>
        <FormInput onChange={(e) => {
          setForm({ ...form, cel: e.target.value });
        }} value={form.cel}></FormInput>
      </div>
      <div>
        <FormLabel>Contato</FormLabel>
        <FormInput onChange={(e) => {
          setForm({ ...form, contato: e.target.value });
        }} value={form.contato}></FormInput>
      </div>
      <div>
        <FormLabel>E-mail</FormLabel>
        <FormInput onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }} value={form.email}></FormInput>
      </div>
      
      </div>
      <p className="secoes">Documentos</p>
      <div className="documentos">      
        <div>
          <FormLabel>Identidade<span className="App-span"> *</span></FormLabel>
          <FormInput onChange={(e) => {
            setForm({ ...form, identidade: e.target.value });
          }} value={form.identidade}></FormInput>
        </div>
        <div>
          <FormLabel>CPF<span className="App-span"> *</span></FormLabel>
          <FormInput placeholder="somente números"onChange={(e) => {
            setForm({ ...form, cpf: e.target.value });
          }} value={form.cpf} ></FormInput>
          

        </div>
        <div>
          <FormLabel>Possui veículo</FormLabel>
          <select className="App-select" name="veiculo" id="veiculo" onChange={(e) => {
            setForm({ ...form, veiculo: e.target.value });
          }} value={form.veiculo}>
          <option value=""> </option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>        
          </select>         
        </div>
        <div>
          <FormLabel>Habilitação</FormLabel>
          <select className="App-select" name="cnh" id="cnh" onChange={(e) => {
            setForm({ ...form, cnh: e.target.value });
          }} value={form.cnh}>
          <option value=""> </option>
          <option value="Não possuo">Não possuo</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="AB">AB</option>
          <option value="AC">AC</option>
          <option value="AD">AD</option>
          <option value="AE">AE</option>
          </select>         
        </div>
      </div>     
      <ErrorSpan isError={cpfError}>Erro: Campos obrigatórios não preenchidos ou CPF já cadastrado no sistema</ErrorSpan>
     </form>
     <button onClick={() => createCandidate()}>Cadastre-se!</button>
     <footer>
    <p>Desenvolvido por Ivanei Araujo no desafio do programa Start Tech da Gama Academy</p>
</footer>
    </header>
      </div>

  );
};

export default App;
