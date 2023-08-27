import React, { useEffect, useRef } from "react";
import styles from "./TrocasDevolucoes.module.css";
import estiloHome from "../Home/Home.module.css";
import estiloBeleza from "../OculosBeleza/OculosBeleza.module.css";

import small from "../../assets/smallGlass.png";

//Icons
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsBoxSeam, BsChat, BsChatDots } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const TrocasDevolucoes = () => {
   const loc = useLocation();
   const trocas = useRef();

   useEffect(() => {
      console.log(`O hash e: ${loc.hash}`);
      loc.hash === "#trocas-e-devolucoes" ? trocas.current.scrollIntoView({ behavior: "smooth" }) : undefined;
   }, [loc.hash]);

   return (
      <div id={styles.ct}>
         <div id={styles.cima}>
            <IoDocumentTextOutline />
            <h5 className={estiloHome.tit}>Política de vendas.</h5>
            <p className={estiloHome.subtit}>Justa e sem burocracia.</p>
         </div>

         <div id={styles.body}>
            {/*Secao1 */}
            <div className={styles.secao}>
               <h5 className={estiloBeleza.tit2}>Garantia</h5>
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
                     <img src={small} alt="oculosBeleza" />
                  </div>
                  <div id={styles.right}>
                     <h5>Beleza All Black</h5>
                     <p className={styles.subtit}>
                        Garantia de <span>2 anos</span>
                     </p>
                     <br />
                     <p>
                        Nos comprometemos a reparar ou substituir as peças que apresentarem qualquer eventual problema. Não estão dentro das
                        conformidades da garantia da Beleza problemas consequentes de mau uso, como arranhões por objetos pontudos, manchas
                        causadas por químicos, danos causados por umidade, etc.
                     </p>
                  </div>
               </div>
            </div>

            {/*Secao2 */}
            <div ref={trocas} className={styles.secao}>
               <h5 className={estiloBeleza.tit2}>Trocas e devoluções</h5>
               <p></p>
               <div>
                  <div id={styles.left}>
                     {" "}
                     <BsBoxSeam size={30} />
                  </div>
                  <div id={styles.right}>
                     <h2 className={styles.secTit}>Solicite uma troca ou devolução</h2>
                     <Link to={"/contato"} className={styles.secLink}>
                        Fale com a equipe de suporte da Beleza ›
                     </Link>
                  </div>
               </div>
               <br />
               <br />
               <p>
                  Nós criamos peças de excelência porque realmente queremos que você adore ser nosso cliente. Entendemos, porém, que um produto
                  comprado online pode não ser exatamente como você esperava, por isso, lhe reservamos o direito de solicitar uma troca ou
                  devolução por qualquer motivo. Sem formulários, sem burocracia e sem enrolação.
               </p>
               <br />
               <p>
                  O prazo para você solicitar uma troca ou devolução é de sete dias após a entrega do seu pedido. Você pode optar pela troca
                  grátis ou solicitar a devolução, sem nenhum custo adicional, para ser totalmente reembolsado.
               </p>
               <br />
               <p>
                  Para que a sua solicitação de troca ou devolução seja aceita, é imprescindível que seu pedido esteja em perfeitas condições,
                  sem marcas ou indícios de mau uso. Se você optar pela devolução do pedido, seu pagamento será imediatamente reembolsado assim
                  que seu pedido retornar para a Beleza e for cancelado. Pagamentos por cartão de crédito serão reembolsados na própria fatura e
                  pagamentos por Pix serão reembolsados via Pix ou TED em até um dia útil após o cancelamento do pedido.
               </p>
            </div>

            {/*Secao3 */}
            <div className={styles.secao}>
               <h5 className={estiloBeleza.tit2}>Formas de envio</h5>
               <p>A Beleza oferece envio para todo Brasil. Você pode optar pelo envio padrão de R$20 ou frete grátis.</p>
               <br />
               <p>
                  O prazo de entrega informado na finalização do pedido passa a ser contabilizado assim que o pedido é postado. Todos os pedidos
                  da Beleza são postados em até um dia útil após a confirmação do pagamento.
               </p>
               <div>
                  <div id={styles.left}>
                     <BsChat size={50} />
                  </div>
                  <div id={styles.right}>
                     <p className={styles.subtit}>
                        <span>Precisa de ajuda?</span>
                     </p>
                     <p>Sempre estaremos aqui para te ajudar.</p>
                     <Link to={"/contato"} className={styles.secLink}>Fale com a equipe de suporte da Beleza ›</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TrocasDevolucoes;
