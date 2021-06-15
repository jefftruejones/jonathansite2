import Link from "next/link";
import styles from "./navbar.module.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked((prev) => !prev);
    console.log("clicked");
  };
  //   <div className={styles.bannerdiv}>
  //   <div className={styles.banner}></div>
  // </div>
  return (
    <header className={styles.header}>
      <div className={styles.headerdiv}>
        <div className={styles.headercontainer}>
          <h1 className={styles.h1}>Jonathan Groger</h1>
          <p className={styles.p}>
            <i>Licensed Massage & Bodywork Therapist</i>
          </p>
        </div>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.li}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.li}>
            <Link href="/services">Services</Link>
          </li>
          <li className={styles.li}>
            <Link href="/reviews">Reviews</Link>
          </li>
          <li className={styles.li}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {clicked ? (
        <>
          <nav className={styles.nav2}>
            <div>
              <button
                className={styles.button}
                type="button"
                onClick={clickHandler}
              >
                <p className={styles.icon}>
                  <FaBars />
                </p>{" "}
                <p className={styles.icon}>MENU</p>
              </button>
            </div>
            <ul className={styles.ul2}>
              <li className={styles.li2} onClick={clickHandler}>
                <Link href="/" onClick={clickHandler} className={styles.link}>
                  <p className={styles.lip}>Home</p>
                </Link>
              </li>
              <li className={styles.li2} onClick={clickHandler}>
                <Link href="/about" onClick={clickHandler}>
                  <p className={styles.lip}>About</p>
                </Link>
              </li>
              <li className={styles.li2} onClick={clickHandler}>
                <Link href="/services" onClick={clickHandler}>
                  <p className={styles.lip}>Services</p>
                </Link>
              </li>
              <li className={styles.li2} onClick={clickHandler}>
                <Link href="/reviews" onClick={clickHandler}>
                  <p className={styles.lip}>Reviews</p>
                </Link>
              </li>
              <li className={styles.li3} onClick={clickHandler}>
                <Link href="/contact" onClick={clickHandler}>
                  <p className={styles.lip}>Contact</p>
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <nav className={styles.nav2}>
          <div>
            {" "}
            <button
              className={styles.button}
              type="button"
              onClick={clickHandler}
            >
              {" "}
              <p className={styles.icon}>
                <FaBars />
              </p>{" "}
              <p className={styles.icon}>MENU</p>
            </button>
          </div>
          <ul className={styles.ul2}></ul>
        </nav>
      )}
    </header>
  );
}
export default Navbar;
