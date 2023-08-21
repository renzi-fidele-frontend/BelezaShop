import React, { useRef, useState } from "react";
import styles from "./Comprar.module.css";
import estiloBeleza from "../OculosBeleza/OculosBeleza.module.css";
import estiloHome from "../Home/Home.module.css";
import imgProduto from "../../assets/IMG_3982.webp";
import produto from "../../assets/ativo.png";
import produto2 from "../../assets/ativo2.png";
import { BsInfoCircle } from "react-icons/bs";
import { color } from "framer-motion";

const Comprar = () => {
   const [imgAmostrar, setImgAmostrar] = useState(1);
   const [cor, setCor] = useState("Acetato Importado Italiano");

   // Refs
   const btn1 = useRef();
   const btn2 = useRef();

   return (
      <div id={styles.ct}>
         <div id={styles.cima}>
            <div id={styles.left}>
               <h3 className={estiloHome.titulo2}>Beleza</h3>
               <p className={estiloHome.subtit2}>All Black</p>
               <img src={imgProduto} alt="" />
            </div>
            <div id={styles.right}>
               <h3 className={estiloBeleza.tit2}>Frete grátis a partir de 2 óculos.</h3>
               <h5>Cor</h5>
               <p>{cor}</p>
               {/*Opções */}
               <div id={estiloBeleza.opcoes} className={styles.opcoes}>
                  <p
                     ref={btn1}
                     id={estiloBeleza.produto1}
                     className={estiloBeleza.btnAtivo}
                     onClick={() => {
                        setImgAmostrar(1);
                        setCor("Preto Brilhante");
                        btn1.current.classList.add(estiloBeleza.btnAtivo);
                        btn2.current.classList.remove(estiloBeleza.btnAtivo);
                     }}
                  >
                     <span></span>
                  </p>
                  <p
                     ref={btn2}
                     id={estiloBeleza.produto2}
                     onClick={() => {
                        setImgAmostrar(2);
                        setCor("Acetato Importado Italiano");
                        btn1.current.classList.remove(estiloBeleza.btnAtivo);
                        btn2.current.classList.add(estiloBeleza.btnAtivo);
                     }}
                  >
                     <span></span>
                  </p>
               </div>

               <h5>Acompanha Case</h5>
               <p>Branco nuvem</p>
               <h5>Garantia de 2 anos</h5>
               <p>Seguro autorizado</p>
               <h5>Medidas:</h5>
               <p>
                  Formato: Quadrado + Largura da lente: 5 cm + Altura da lente: 3,5 cm + Ponte: 1,5 cm + Comprimento Haste: 14,5 cm + Largura
                  Total: 15 cm
               </p>
               <h5>
                  R$ 49,99 <span> em até 2x sem juros</span>
               </h5>
               <p id={styles.verde}>
                  <BsInfoCircle />
                  <span>Entrega mais rápida do Brasil.</span>
               </p>
              
             
            </div>
         </div>
      </div>
   );
};

export default Comprar;
