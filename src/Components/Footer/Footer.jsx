import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

// React Icons
import { BsInstagram, BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
   return (
      <footer id={styles.ct}>
         <div id={styles.cima}>
            <div id={styles.left}>
               <Link to={"/sobre"}>Sobre</Link>
               <Link to={"/contato"}>Contato</Link>
               <Link to={"/trocas-e-devolucoes"}>Trocas e devoluções</Link>
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
         <div id={styles.baixo}></div>
      </footer>
   );
};

export default Footer;
