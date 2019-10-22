import React from 'react';
import './App.css';


//import do CSS
import '../../assets/CSS/style.css';

//import da imagem
import logo from  '../../assets/img/imagem-opflix.png';
import {Link} from 'react-router-dom';

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
      
      <section id= "o-que-fazemos">
        <div>
        <h2>O Que Fazemos?</h2>

        <p>A empresa OpFlix, tem como papel principal informar os mais novos<br/>lancamentos de filmes e séries que estão acontecendo e que<br/>vão acontecer. Para isso, fique atento ao nosso site para não perder<br/> nenhum detalhe sobre os próximos sucessos do cinema.<br/> Mais em breve iremos disponibilizar nossos serviços na Play Store <br/>e também na App Store. Fique Ligado !!</p>
        </div>
      </section>
    
    <section id= "quem-somos">
      <div>
        <h3>Quem Somos?</h3>

        <p id= "texto-quem-somos">
          Nós da empresa OpFlix, fomos criados em 1885 com o proprósito de <br/>informar as pessoas sobre os principais lancamentos de séries e filmes. 
        </p>
      </div>

    </section>
    
    
    <footer className="rodape">

      <div className="div-rodape">
      </div>
      
        <div className="img-rodape">
         <Link to="/"> <img id="opfliximg" src={logo} /> </Link>
  
        </div>
        <div className="rodape-contato">
        <p id= "contatos">
        (11) 1234-54321
        <br/>
        contatoopflix@email.com
        </p>
        </div>
    </footer>
    
    </div>
  );
}

export default App;
