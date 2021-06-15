import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      © Jonathan Groger - 2021 | Web Development by{" "}
      <a className={styles.a} href="https://jefftrue.dev" target="_blank">
        Jeff True Jones
      </a>
    </footer>
  );
}

export default Footer;
