import React from 'react';
import './App.css';


//import do CSS
import '../src/assets/CSS/style.css';

//import da imagem
import logo from  '../src/assets/img/imagem-opflix.png'

function App() {
  return (
    <div className="App">
      <div>
        <header className="cabecalhoPrincipal">
        <div className="container"></div>

     
    </header>
  </div>

  <section id="menu1">
  <div id="cadastro">
    <ul>
      <li className="nav-item">
        <a href="#">Cadastre-se</a>
      </li>
    </ul>
  </div>

  <div id="login-usuario">
    <ul>
      <li className="nav-item">
        <a href="#">Login</a>
      </li>
    </ul>
  </div>
</section>

  <section>


  <section className="banner">
    <img id="opfliximg" src={logo} />
</section>

    <nav className="cabecalhoPrincipal-nav">
        <a>Principais Lançamentos</a>
        <a>O Que Fazemos ?</a>
        <a>Quem Somos ?</a>
        <a>Contato</a>
      </nav>

<section className="menu-nav">

  </section>
</section>

    </div>
  );
}

export default App;
