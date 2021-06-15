import Layout from "../components/layout";
import utils from "../styles/utils.module.css";
import styles from "./styles/about.module.css";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Layout>
      <div className={styles.panel}>
        <div className={`${utils.unit} ${utils.center}`}>
          {" "}
          <Image
            src="/images/jonathan.jpg"
            alt="Picture of Jonathan Groger, LMBT"
            width={500}
            height={472}
          />
        </div>

        <div className={utils.unit}>
          <h2 className={utils.center}>About Me</h2>
          <p className={styles.p}>
            I am very passionate and energized by the opportunity I have to help
            others. I do this through bodywork and promoting self-care habits to
            decrease, and ideally, eliminate physical discomfort. I am led by my
            intuition, and each session is orchestrated around what feels
            problematic for each individual person. I believe that our inner
            world is deeply connected to the more external physical experiences
            and I honor this intertwined system by intentionally creating a
            space that feels safe for all people.
          </p>{" "}
          <div className={utils.panelcolumn}>
            <div className={`${utils.unit} ${styles.card}`}>
              <h3 className={utils.center}>Experience</h3>
              <ul>
                <li>Graduated from Florida School of Massage in 2011</li>
                <li>8+ years working alongside chiropractors</li>
                <li>Worked with UNC Football and Lacrosse Teams</li>
              </ul>
            </div>
            <div className={`${utils.unit} ${styles.card}`}>
              <h3 className={utils.center}>Continuing Education Units</h3>
              <ul>
                <li>Satvatove Institute Communication Seminars</li>
                <li>
                  Functional Bowen™ Therapy Concepts II: The Pediatric
                  Application for Health Care Professionals
                </li>
                <li>2 Hour Foam Rolling and Self Care Practices</li>
                <li>Chi Nei Tsang and the Pelvis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
