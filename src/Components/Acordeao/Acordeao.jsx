import React, { useEffect } from "react";
import styles from "./Acordeao.module.css";
import Swiper3d from "../Swiper3d/Swiper3d";
import estiloBeleza from "../../Pages/OculosBeleza/OculosBeleza.module.css";
import estiloHome from "../../Pages/Home/Home.module.css";

//Icons
import { AiOutlineMessage } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";

const Acordeao = () => {
   return (
      <div id={styles.ct}>
         <details>
            <summary id={styles.sum}>
               <VscFeedback />
               <span className={estiloBeleza.tit2}>Avaliações dos clientes</span>{" "}
            </summary>
            <Swiper3d nrFotos={3} />
         </details>
         <details id={styles.faq}>
            <summary id={styles.sum}>
               <AiOutlineMessage />
               <span className={estiloBeleza.tit2}>Perguntas frequentes</span>{" "}
            </summary>
            <details>
               <summary>Qual é o preço do frete?</summary>O envio é padrão. O valor do envio padrão é de R$20 para todo o Brasil, independente da
               região.
            </details>

            <details>
               <summary>Qual o prazo de entrega?</summary>Enviamos via Correios para todo Brasil. O prazo de entrega depende da sua região.
            </details>

            <details>
               <summary>Possui frete grátis?</summary>Sim, a partir de 2 óculos ganhe frete grátis.
            </details>

            <details>
               <summary>Qual o tipo de rosto ideal?</summary>A medida é padrão e combina com todos os tipos de rostos.
            </details>

            <details>
               <summary>O Beleza All Black é Unissex?</summary>Sim, Beleza All Black foi feito para homens e mulheres.
            </details>

            <details>
               <summary>Possui autorização para revenda?</summary>Claro. Compre para uso pessoal ou para ganhar uma renda extra com 100% de
               lucro.
            </details>

            <details>
               <summary>Possui proteção?</summary>Sim, possui a mais alta proteção UV400 existente em óculos solares.
            </details>
         </details>
      </div>
   );
};

export default Acordeao;

/*
 */
