import Link from "next/link";
import styles from "./styles/contact.module.css";
import utils from "../styles/utils.module.css";
import { useState } from "react";

import Layout from "../components/layout";
export default function Contact() {
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked((prev) => !prev);
  };
  return (
    <Layout>
      <div className={`${utils.panelcolumn} `}>
        <div>
          <h3 className={`${styles.h3}`}>
            {" "}
            <i>
              {" "}
              I will be out of commission until mid-August due to recovering
              from top surgery. I apologize for the inconvenience, and I look
              forward to working with you then.
            </i>
          </h3>
          <h2 className={`${styles.h2} `}>Submit an Appointment Request</h2>
          <form
            className={`${styles.form} ${styles.card}`}
            action="https://formspree.io/f/mrgrkeze"
            method="POST"
          >
            <label htmlFor="name" className={styles.formelement}></label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="name"
              required
              className={`${styles.input} ${styles.card}`}
            />
            <label htmlFor="email" className={styles.formelement}></label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              autoComplete="email"
              required
              className={`${styles.input} ${styles.card}`}
            />
            <label htmlFor="phone" className={styles.formelement}></label>
            <input
              id="phone"
              name="phone"
              type="phone"
              placeholder="Phone Number"
              autoComplete="phone"
              required
              className={`${styles.input} ${styles.card}`}
            />
            <div className={`${styles.formelement}`}>
              <label htmlFor="slidingScale" className={styles.check}>
                Sliding Scale Payment:
              </label>
              <input
                type="checkbox"
                id="slidingScale"
                name="slidingScale"
                value="slidingScale"
                className={`${styles.input} ${styles.card}`}
              />{" "}
              <button className={styles.button} onClick={clickHandler}>
                ?
              </button>
              {clicked ? (
                <div>
                  <p>
                    <i>
                      I feel strongly that every person and all bodies should
                      have access to massage. For anyone who is unable to
                      receive bodywork due to finances, I provide a sliding
                      scale of $50-70 for an hour massage. If this is you,
                      please check this box. This is a service I am very happy &
                      fortunate to be able to offer, and it is an honor to be
                      able to support you in this way.
                    </i>
                  </p>
                </div>
              ) : null}
            </div>

            <label
              htmlFor="appointmentType"
              className={`${styles.formelement}`}
            >
              Appointment Type:
            </label>
            <select
              id="appointmentTypes"
              name="appointmentTypes"
              className={`${styles.input} ${styles.card}`}
            >
              <option value="deepTissue">Deep Therapeutic Massage</option>
              <option value="topSurgery">Top Surgery Recovery</option>
              <option value="infantMassage">Infant Massage</option>
              <option value="prenatal">Prenatal</option>
              <option value="sportsInjury">
                Sports Related Injuries/Tension
              </option>
              <option value="scoliosis">Scoliosis</option>
              <option value="chronicPain">Chronic Pain</option>
              <option value="scarTissue">Scar Tissue </option>
              <option value="Fibromyalgia ">Fibromyalgia</option>
              <option value="rotatorInjury ">
                Rotator injuries/rehabilitation{" "}
              </option>
              <option value="PlantarFasciitis">Plantar Fasciitis </option>
              <option value="autoInjury">Auto Injury/Trauma </option>
              <option value="parkinsons">Parkinson's</option>
              <option value="tendonitis">Tendonitis</option>
              <option value="FrozenShoulder">Frozen Shoulder</option>
              <option value="Insomnia">Insomnia</option>
              <option value="CarpalTunnelSyndrome">
                Carpal Tunnel Syndrome
              </option>
              <option value="Arthritis">Arthritis</option>
              <option value="WorkRelatedInjury">Work Related Injury</option>
              <option value="HeadachesandMigraines">
                Headaches & Migraines
              </option>
              <option value="anxietyPtsd">Anxiety/PTSD</option>
            </select>
            <label htmlFor="appointment" className={styles.formelement}></label>
            <textarea
              className={`${styles.input} ${styles.card} ${styles.text}`}
              placeholder="Anything else you want me to know"
            ></textarea>
            <button type="submit" className={`${styles.input} ${styles.card}`}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
