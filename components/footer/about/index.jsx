import styles from "./aboutParagraft.module.css";

export default function AboutParagraft() {
  return (
    <>
      <div className=" w-full sm:w-1/2 ">
        <p className={styles.footerPragraftItem}>
          Ini merupakan website sederhana yang dibangun dengan memanfaatkan
          teknologi yang ada sehingga mampu menghasilkan suatu karya yang
          bermanfaat.
        </p>
        <p className={styles.footerPragraftItem}>
          Website ini dibangun oleh salah satu member Ineffable.
        </p>
      </div>
      <div className=" w-full sm:w-1/2 ">
        <p className={styles.footerPragraftItem}>
          Teknologi yang digunakan ialah NextJS dan Google Firebase sebagai
          databasenya serta teknologi - teknologi yang tidak sempat disampaikan.
        </p>
        <p className={styles.footerPragraftItem}>
          Diharapkan website ini dapat terus berkembang dan terhindar dari hal -
          hal yang tidak diinginkan.
        </p>
      </div>
    </>
  );
}
