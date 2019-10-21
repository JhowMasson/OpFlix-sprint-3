import React from 'react';
import './App.css';


//import do CSS
import '../../assets/CSS/style.css';

//import da imagem
import logo from  '../../assets/img/imagem-opflix.png'

function App() {
  return (
    <div className="App">
      <div>
        <header className="cabecalhoPrincipal">
        <div className="container"></div>

     
    </header>
  </div>

  <section id="menu1">
  <div>
    <ul>
      <li className="nav-item">
        <a id="cadastro" href="#">Cadastre-se</a>
      </li>
    </ul>
  </div>

  <div>
    <ul>
      <li className="nav-item">
        <a id="login-usuario" href="#">Login</a>
      </li>
    </ul>
  </div>
</section>

  <section className="banner">
    
    <img id="opfliximg" src={logo} />

  </section>


  
  <section>
    <nav id="cabecalhoPrincipal-nav">
      <a class= "menu-design" href= "#">Principais Lançamentos</a>
      <a class= "menu-design" href= "#">O Que Fazemos ?</a>
      <a class= "menu-design" href= "#">Quem Somos ?</a>
      <a class= "menu-design" href= "#">Contato</a>
    </nav>
  </section>

  <section className="menu-nav">

 

  <section className="fundo-tela">
  <main class="conteudoPrincipal">
    <section class="conteudoPrincipal-cadastro">
        <h1 id= "titulo-section">Principais Lancamentos</h1>
        <div class="container" id="conteudoPrincipal-lista">

            <table id="tabela-lista">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome Filme</th>
                        <th>Sinopse</th>
                        <th>Genero</th>
                        <th>Data Lancamento</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Filme A</td>
                        <td>Regerkahfugfuqegieuqgr qerfgqeuirfgeguiqegr qugfruiqrugqug</td>
                        <td>ADMINISTRADOR</td>
                        <td>SP</td>
                        <td>Editar/Excluir</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Filme B</td>
                        <td>Regerkahfugfuqegieuqgr qerfgqeuirfgeguiqegr qugfruiqrugqug</td>
                        <td>COMUM</td>
                        <td>SP</td>
                        <td>Editar/Excluir</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Filme C</td>
                        <td>Regerkahfugfuqegieuqgr qerfgqeuirfgeguiqegr qugfruiqrugqug</td>
                        <td>ADMINISTRADOR</td>
                        <td>SP</td>
                        <td>Editar/Excluir</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Filme D</td>
                        <td>Regerkahfugfuqegieuqgr qerfgqeuirfgeguiqegr qugfruiqrugqug</td>
                        <td>ADMINISTRADOR</td>
                        <td>SP</td>
                        <td>Editar/Excluir</td>
                    </tr>

                </tbody>

            </table>
            </div>
    </section>        
    </main>
  </section>

  </section>
      </div>
  );
}

export default App;
