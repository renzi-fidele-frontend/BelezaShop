import React from "react";
import styles from "./Home.module.css";
import lady from "../../assets/heroLady.png";
import { Link } from "react-router-dom";
import produto from "../../assets/ativo.png"

const Home = () => {
   return (
      <div id={styles.ct}>
         {/*Secao do Hero */}
         <div id={styles.hero}>
            <div id={styles.left}>
               <h2>
                  Moda passa,
                  <br />
                  estilo é eterno.{" "}
               </h2>
               <p>Coco Chanel</p>
            </div>
            <div id={styles.right}>
               <img src={lady} alt="lady" />
            </div>
         </div>

         {/*Secao do Body */}
         <div id={styles.body}>
            <h3>Beleza</h3>
            <p>All Black</p>
            <h5>O verdadeiro óculos de blogueira.</h5>
            <span>E muito melhor do que qualquer outro da internet.</span>
            <div>
               <Link id={styles.saibaBtn}>Saiba mais</Link>
               <Link id={styles.buyBtn}>Compre agora</Link>
            </div>
            <img src={produto} alt="oculos beleza" />
         </div>
      </div>
   );
};

export default Home;
