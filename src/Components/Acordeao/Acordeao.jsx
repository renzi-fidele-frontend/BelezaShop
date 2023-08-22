import React, { useEffect } from "react";
import styles from "./Acordeao.module.css";
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

const Acordeao = () => {
   useEffect(() => {
      const ac = new Accordion(".accordion-container");
   }, []);

   return (
      <div id={styles.ct}>
         <div className="accordion-container">
            <div className="ac">
               <h2 className="ac-header">
                  <button type="button" className="ac-trigger">
                     Lorem ipsum dolor sit amet.
                  </button>
               </h2>
               <div className="ac-panel">
                  <p className="ac-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </div>
            </div>

            <div className="ac">
               <h2 className="ac-header">
                  <button type="button" className="ac-trigger">
                     Lorem ipsum dolor sit amet.
                  </button>
               </h2>
               <div className="ac-panel">
                  <p className="ac-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </div>
            </div>

            <div className="ac">
               <h2 className="ac-header">
                  <button type="button" className="ac-trigger">
                     Lorem ipsum dolor sit amet.
                  </button>
               </h2>
               <div className="ac-panel">
                  <p className="ac-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Acordeao;
