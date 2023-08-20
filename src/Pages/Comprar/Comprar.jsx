import React, { useRef, useState } from "react";
import styles from "./Comprar.module.css";
import estiloBeleza from "../OculosBeleza/OculosBeleza.module.css";
import estiloHome from "../Home/Home.module.css";
import imgProduto from "../../assets/IMG_3982.webp";
import produto from "../../assets/ativo.png";
import produto2 from "../../assets/ativo2.png";

const Comprar = () => {
   const [imgAmostrar, setImgAmostrar] = useState(1);
   const [cor, setCor] = useState("Acetato Importado Italiano")

   // Refs
   const btn1 = useRef();
   const btn2 = useRef();

   return (
      <div id={styles.ct}>
         <div id={styles.cima}>
            <div id={styles.left}>
               <h3 className={estiloHome.titulo2}>Beleza</h3>
               <p>All Black</p>
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
                        setCor("Preto Brilhante")
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
                        setCor("Acetato Importado Italiano")
                        btn1.current.classList.remove(estiloBeleza.btnAtivo);
                        btn2.current.classList.add(estiloBeleza.btnAtivo);
                     }}
                  >
                     <span></span>
                  </p>
               </div>
               <h5>Cor</h5>
               

            </div>
         </div>
      </div>
   );
};

export default Comprar;
