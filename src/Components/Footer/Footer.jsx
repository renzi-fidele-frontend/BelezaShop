import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import imgPagar from "../../assets/card_brands.png";

// React Icons
import { BsInstagram, BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
   return (
      <footer id={styles.ct}>
         <div id={styles.cima}>
            <div id={styles.left}>
               <Link to={"/sobre"}>Sobre</Link>
               <Link to={"/contato"}>Contato</Link>
               <Link to={"/politica-de-vendas/#trocas-e-devolucoes"}>Trocas e devoluções</Link>
               <Link to={"/politica-de-vendas"}>Política de vendas</Link>
            </div>
            <div id={styles.right}>
               <a href="">
                  <BsInstagram />
               </a>
               <a href="">
                  <BsFacebook />
               </a>
               <a href="">
                  <BsLinkedin />
               </a>
               <a href="">
                  <BsYoutube />
               </a>
            </div>
         </div>
         <div id={styles.baixo}>
            <div id={styles.left}>
               <h1>Beleza</h1>
               <p>Copyright © 2023 Jouse Ltda. CNPJ: 31.758.172/0001-52</p>
               <p>Rua Brasílio Itiberê, 1880 - Curitiba, PR 80230-050</p>
            </div>
            <div id={styles.right}>
               <img src={imgPagar} alt="pagamentos disponiveis" />
               <p>Precisa de ajuda?</p>
               <span>suporte@jouse.com.br</span>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
