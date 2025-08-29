import React from "react";
import styles from "./Features.module.css";
// import { FaGem, FaLeaf, FaHeartbeat } from "react-icons/fa";
// import { LuLeaf } from "react-icons/lu";

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        {/* <FaGem className={styles.icon} /> */}
        <h3>Best Quality</h3>
        <p>Finest ingredients, superior taste.</p>
      </div>

      <div className={styles.feature}>
        {/* <FaLeaf className={styles.icon} /> */}
        <h3>Natural & Pure</h3>
        <p>No additives, just nature.</p>
      </div>

      <div className={styles.feature}>
        {/* <FaHeartbeat className={styles.icon} /> */}
        <h3>Health-Conscious</h3>
        <p>Guilt-free, nutritious snacking.</p>
      </div>

      <div className={styles.feature}>
        {/* <LuLeaf className={styles.icon} /> */}
        <h3>Freshly Made</h3>
        <p>Crisp, fresh with every bite.</p>
      </div>
    </section>
  );
};

export default Features;
