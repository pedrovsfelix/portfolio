import React from "react";
import "../css/Home.css";
import Me from "../img/Pedro.jpg";
import Mee from "../img/Pedro2.jpg";
import Dev from "../img/dev.jpg";

const Home = () => {
  return (
    <div>
      <section className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Olá, Meu nome é</h2>
            <h1 className="i-name heading">
              Pedro <span>Félix</span>
            </h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <p className="i-title-item">Web Developer</p>
                <p className="i-title-item">Data Analyst</p>
              </div>
            </div>
            <div className="i-desc">
              <p>
                Eu estudo a área de front-end durante meus horários vagos.
                Atualmente faço freelas com WORDPRESS e trabalho com Análise de
                Dados/Desenvolvimento de Dashboards com PowerBi.
              </p>
            </div>
          </div>
        </div>
        <div className="i-right">
          <img src={Me} alt="" className="i-img" />
        </div>
      </section>

      <section className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={Mee} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <h2 className="a-title heading">
            Sobre <span>Mim</span>
          </h2>
          <p className="a-sub">Um pouco sobre mim ou quase</p>
          <p className="a-desc">
            Bom eu me chamo Pedro, tenho 26 anos e resido em Recife/Pernambuco.
            Graduando em Ciência da Computação pela universidade Estácio de Sá,
            tenho um objetivo de me tornar um Desenvolvedor ront-End. 
            Atualmente trabalho com Análise de Dados e integração das
            fontes com o PowerBi Desktop (desenvolvimento de Dashboards) para
            auxiliar nas tomadas de decisões. Realizo freelancer na área de
            desenvolvimento Web com o sistema WordPress, criando páginas de
            vendas, lading pages, e-commerce e blogs.
          </p>
        </div>
      </section>

      <div className="projetos">
        <section className="p">
          <h2 className="p-title heading">
            Meus <span>Projetos</span>
          </h2>
          <div className="p-boxs">
            <div className="boxs">
                <img src={Dev} alt="Imagem do Post" className="img-boxs" />
                <h3 className="title-boxs sub-heading">Em <span>Breve</span></h3>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facere iusto provident iste aut. Officiis amet temporibus non perspiciatis sint necessitatibus voluptatem reiciendis odio, deleniti libero magnam repellat quod ullam.
                </p>
                <button className="btn-2">Ver Projeto</button>
            </div>
            <div className="boxs">
                <img src={Dev} alt="Imagem do Post" className="img-boxs" />
                <h3 className="title-boxs sub-heading">Em <span>Breve</span></h3>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facere iusto provident iste aut. Officiis amet temporibus non perspiciatis sint necessitatibus voluptatem reiciendis odio, deleniti libero magnam repellat quod ullam.
                </p>
                <button className="btn-2">Ver Projeto</button>
            </div>
            <div className="boxs">
                <img src={Dev} alt="Imagem do Post" className="img-boxs" />
                <h3 className="title-boxs sub-heading">Em <span>Breve</span></h3>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facere iusto provident iste aut. Officiis amet temporibus non perspiciatis sint necessitatibus voluptatem reiciendis odio, deleniti libero magnam repellat quod ullam.
                </p>
                <button className="btn-2">Ver Projeto</button>
            </div>
            <div className="boxs">
                <img src={Dev} alt="Imagem do Post" className="img-boxs" />
                <h3 className="title-boxs sub-heading">Em <span>Breve</span></h3>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facere iusto provident iste aut. Officiis amet temporibus non perspiciatis sint necessitatibus voluptatem reiciendis odio, deleniti libero magnam repellat quod ullam.
                </p>
                <button className="btn-2">Ver Projeto</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
