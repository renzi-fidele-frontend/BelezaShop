import React from "react";
import styles from "./TrocasDevolucoes.module.css";
import estiloHome from "../Home/Home.module.css";

//Icons
import { HiOutlineDocument } from "react-icons/hi";

const TrocasDevolucoes = () => {
   return (
      <div id={styles.ct}>
         <div id={styles.cima}>
            <HiOutlineDocument />
            <h5 className={estiloHome.tit}>Política de vendas.</h5>
            <p className={estiloHome.subtit}>Justa e sem burocracia.</p>
         </div>

         <div id={styles.body}>
            {/*Secao1 */}
            <div className={styles.secao}>
               <h5>Garantia</h5>
               <p>
                  Nós temos a nossa maneira de garantir que todos os produtos da Jouse serão confeccionados com excelência, por isso, realmente
                  acreditamos que eles farão parte da sua vida por muito tempo.
               </p>
               <br />
               <p>
                  Nós temos a nossa maneira de garantir que todos os produtos da Jouse serão confeccionados com excelência, por isso, realmente
                  acreditamos que eles farão parte da sua vida por muito tempo.
               </p>
               <div>
                  <div id={styles.left}>
                     <img src="" alt="" />
                  </div>
                  <div id={styles.right}>
                     <h5></h5>
                  </div>
               </div>
            </div>

            {/*Secao2 */}
            <div className={styles.secao}>
               <h5>Garantia</h5>
               <p></p>
               <div></div>
            </div>

            {/*Secao3 */}
            <div className={styles.secao}>
               <h5>Garantia</h5>
               <p></p>
               <div></div>
            </div>
         </div>
      </div>
   );
};

export default TrocasDevolucoes;
