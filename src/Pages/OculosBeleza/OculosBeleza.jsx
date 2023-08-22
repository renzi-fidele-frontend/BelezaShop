import React, { useEffect, useRef, useState } from "react";
import styles from "./OculosBeleza.module.css";
import estiloHome from "../Home/Home.module.css";
import produto from "../../assets/ativo.png";
import produto2 from "../../assets/ativo2.png";
import mulher1 from "../../assets/realwomen1.jpg";
import mulher2 from "../../assets/realwomen.jpg";
import mulher3 from "../../assets/produto3.png";
import star from "../../assets/star.svg";

import { Link, useLocation } from "react-router-dom";
import Swiper3d from "../../Components/Swiper/Swiper3d";

const OculosBeleza = () => {
   const loc = useLocation();
   const [imgAmostrar, setImgAmostrar] = useState(1);

   // Refs
   const btn1 = useRef();
   const btn2 = useRef();

   useEffect(() => {
      console.log(useLocation.state);
   }, [useLocation.state]);

   return (
      <div id={styles.ct}>
         <h3 className={estiloHome.titulo2}>Beleza</h3>
         <p className={estiloHome.subtit2}>All Black</p>
         <div id={styles.body}>
            {/*------------Seção 1------------- */}
            <div className={styles.secao} style={{ borderBottom: "1px solid var(--cor-borda)" }}>
               <h5 className={estiloHome.tit}>Um óculos especial.</h5>
               <h6 className={estiloHome.subtit}>Para pessoas especiais.</h6>
               <p>
                  O Beleza All Black é uma peça de excelência artesanal feita em acetato selecionado da Itália com acabamento em linda cor preta
                  que brilha com a luz. Um óculos único, criado para quem aprecia a beleza da moda.
               </p>
               <div id={styles.imgsCont}>
                  {imgAmostrar === 1 && <img src={produto} alt="produto 1" />}
                  {imgAmostrar === 2 && <img src={produto2} alt="produto 2" />}
               </div>

               <h4>Tipo</h4>
               <div id={styles.opcoes}>
                  <p
                     ref={btn1}
                     id={styles.produto1}
                     className={styles.btnAtivo}
                     onClick={() => {
                        setImgAmostrar(1);
                        btn1.current.classList.add(styles.btnAtivo);
                        btn2.current.classList.remove(styles.btnAtivo);
                     }}
                  >
                     <span></span>
                  </p>
                  <p
                     ref={btn2}
                     id={styles.produto2}
                     onClick={() => {
                        setImgAmostrar(2);
                        btn1.current.classList.remove(styles.btnAtivo);
                        btn2.current.classList.add(styles.btnAtivo);
                     }}
                  >
                     <span></span>
                  </p>
               </div>
            </div>

            {/*------------Seção 2------------- */}
            <div className={styles.secao} style={{ borderBottom: "1px solid var(--cor-borda)" }}>
               <h5 className={estiloHome.tit}>Um design versátil.</h5>
               <h6 className={estiloHome.subtit}>Que nunca sai de moda.</h6>
               <p>
                  O Beleza All Black é muito versátil e combina com todo tipo de look e ocasião. Um companheiro que vai estar com você em todos
                  os momentos especiais da sua vida.
               </p>
               <div className={styles.imgCont}>
                  <img src={mulher1} alt="" />
               </div>
            </div>

            {/*------------Seção 3------------- */}
            <div className={styles.secao} style={{ borderBottom: "1px solid var(--cor-borda)" }}>
               <h5 className={estiloHome.tit}>Não é só estilo.</h5>
               <h6 className={estiloHome.subtit}>Protegemos os seus olhos.</h6>
               <p>
                  O Beleza All Black possui tecnologia avançada em proteção contra os raios solares. O Brasil é o país que mais recebe irradiação
                  solar em todo o mundo e é por isso que focamos tanto no cuidado dos seus olhos com lentes protegidas em UV400.
               </p>
               <div className={styles.imgCont}>
                  <img src={mulher2} alt="" />
               </div>
            </div>

            {/*------------Seção 4------------- */}
            <div className={styles.secao} style={{ borderBottom: "1px solid var(--cor-borda)" }}>
               <h5 className={estiloHome.tit}>Feito à mão.</h5>
               <h6 className={estiloHome.subtit}>Pelos melhores mestres artesãos.</h6>
               <p>
                  O Beleza All Black é uma peça de excelência artesanal com um acabamento muito superior ao de qualquer outro óculos da internet.
                  Sua produção é feita na Itália pelos mestres artesãos da moda, os melhores do mundo, por isso seu material é resistente à
                  quedas e riscos.
               </p>
               <div className={styles.imgCont}>
                  <img src={mulher3} alt="" />
               </div>
            </div>

            {/*------------Seção 5------------- */}
            <div className={styles.secao} style={{ paddingBottom: "0", marginBottom: "2.5em" }}>
               <ul>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
               </ul>
               <h2>Média 5,0 de 5,0</h2>
               <h5 className={estiloHome.tit}>O óculos mais bem avaliado do Brasil.</h5>
               <h6 className={estiloHome.subtit}>Quem já comprou, adorou.</h6>
               <p>
                  O Beleza All Black conquistou o coração de + 1.700 clientes e já é o mais bem avaliado do Brasil. São milhares de avaliações
                  excelentes de clientes de todo o país recomendando o Beleza All Black. (abaixo mostrar os todos os depoimentos com formato de
                  passar para o lado)
               </p>
            </div>
            <Swiper3d />
         </div>
         <h3 className={estiloHome.titulo2}>Beleza</h3>
         <p className={estiloHome.subtit2}>All Black</p>
         <div id={styles.oferta}>
            <h6 className={styles.tit2}>Compre online.</h6>
            <p className={styles.subtit2}>Sem sair de casa.</p>
            <Link to={"/comprar/beleza-oculos"} id={estiloHome.buyBtn}>
               Compre agora{" "}
            </Link>
         </div>
      </div>
   );
};

export default OculosBeleza;