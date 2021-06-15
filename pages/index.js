import Link from "next/link";
import styles from "./styles/index.module.css";
import utils from "../styles/utils.module.css";

import Layout from "../components/layout";
export default function Home() {
  return (
    <Layout>
      <div className={`${utils.panelcolumn}  `}>
        <section className={` ${styles.border}`}>
          <h2 className={styles.h2}>Welcome!</h2>
          <h3 className={`${styles.h3} `}>
            {" "}
            <i>
              I will be out of commission until mid-August due to recovering
              from top surgery. I apologize for the inconvenience, and I look
              forward to working with you then.
            </i>
          </h3>
          <div className={` ${styles.welcome} `}>
            <div className={styles.card}>
              <p className={styles.letter}>
                Thank you for coming to my webpage. I hope to support you in
                your journey to a more comfortable experience in your body -
                whether you’re looking to receive massage for stress, physical
                pain, recovery, or whatever else. It is my goal to create a
                space that feels safe and welcoming to everyone who enters. If
                you have any questions, please do not hesitate to reach out and
                drop a line.
              </p>
              <p className={styles.centertext}>
                All the best, <br></br> Jonathan
              </p>
            </div>

            <div className={`${styles.center}  `}>
              {" "}
              <p className={styles.centerText}>
                For an appointment, send an email to{" "}
                <span className={styles.email}>
                  <a href="mailto: abc@example.com" target="_blank">
                    jonathanthelmbt@gmail.com.
                  </a>
                </span>{" "}
                &nbsp;-OR-
              </p>
              <Link href="/contact">
                <p className={`${styles.request} ${styles.center}`}>
                  Request An Appointment
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.border}>
          <h2 className={styles.h2}>Some Benefits of Massage:</h2>
          <div className={`${utils.panelrow} ${styles.welcome}`}>
            {" "}
            <div className={`${utils.unit} ${styles.card}`}>
              <h3 className={styles.centertext}>Physical</h3>
              <ul className={styles.ul}>
                <li>Decrease physical pain </li>
                <li>Improved circulation</li>
                <li>Lower blood pressure</li>
                <li>Increase range of motion</li>
              </ul>
              <p className={styles.list}>
                Decrease physical pain, Improved circulation, Lower blood
                pressure, Increase range of motion
              </p>
            </div>
            <div className={`${utils.unit} ${styles.card}`}>
              <h3 className={styles.centertext}>Mental</h3>
              <ul className={styles.ul}>
                <li>Reduction of stress hormone</li>
                <li>Relaxation</li>
                <li>Heightened mental alertness</li>
                <li>Temper effects of dementia</li>
              </ul>
              <p className={styles.list}>
                Reduction of stress hormone, Relaxation, Heightened mental
                alertness, Temper effects of dementia
              </p>
            </div>
            <div className={`${utils.unit} ${styles.card}`}>
              <h3 className={styles.centertext}>Emotional</h3>
              <ul className={styles.ul}>
                <li>Reduced anxiety and depression</li>
                <li>Sleep better</li>
                <li>Reduce irritability</li>
                <li>Pain management</li>
              </ul>
              <p className={styles.list}>
                Reduced anxiety and depression, Sleep better, Reduce
                irritability, Pain management
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className={`${utils.panelrow} ${styles.welcome2}`}>
            <div className={`${utils.unit} `}>
              <h2 className={styles.h2}>COVID-19 Precautions:</h2>

              <div
                className={`${styles.codid} ${styles.card2} ${styles.centertext}`}
              >
                <p>
                  In order to protect the safety of myself and others, I have
                  been fully vaccinated. I strongly discourage people who are
                  not feeling well to cancel their appointment, and for these
                  situations the 24 hour cancellation fee does not apply.
                </p>
              </div>
            </div>
          </div>
          <div className={`${utils.panelrow} ${styles.welcome2}`}>
            <div className={`${utils.unit} ${styles.card}`}>
              <h3 className={styles.centertext}>Mask wearing</h3>
              {/* <ul className={styles.ul}>
                <li>
                  I will be wearing a mask during all massage sessions. If you
                  are also vaccinated, you are welcome to mask or not, depending
                  upon your preference and comfort levels.
                </li>
              </ul> */}
              <p className={styles.list2}>
                I will be wearing a mask during all massage sessions. If you are
                also vaccinated, you are welcome to mask or not, depending upon
                your preference and comfort levels.
              </p>
            </div>
            <div className={`${utils.unit} ${styles.card}`}>
              <h3 className={styles.centertext}>Sanitation and Ventilation</h3>
              {/* <ul className={styles.ul}>
                <li>
                  {" "}
                  I change sheets, wipe down all surfaces (table, face cradle,
                  door/door knob, etc) and wash my hands before and after every
                  session. There is a hepa filter that is always on to circulate
                  and purify the air.
                </li>
              </ul> */}
              <p className={styles.list2}>
                I change sheets, wipe down all surfaces (table, face cradle,
                door/door knob, etc) and wash my hands before and after every
                session. There is a hepa filter that is always on to circulate
                and purify the air.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
