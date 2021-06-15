import Layout from "../components/layout";
import utils from "../styles/utils.module.css";
import Link from "next/link";
import styles from "./styles/services.module.css";
import { useState } from "react";
const ServicesPage = () => {
  const [clicked, SetClicked] = useState(false);
  const clickHandler = () => {
    SetClicked((prev) => !prev);
  };
  console.log(clicked);
  return (
    <Layout>
      <div className={utils.center}>
        {" "}
        <button className={styles.button} type="button" onClick={clickHandler}>
          {clicked
            ? "Click here for Pricing"
            : "Click here to see list of Specialties"}{" "}
        </button>
      </div>
      {clicked ? (
        <>
          <div className={utils.panelcolumn}>
            <div className={`${utils.unit} ${styles.card}`}>
              <h4>Deep Therapeutic Massage:</h4>
              <p>
                I utilize a combination of modalities (myofacial, deep tissue,
                nmt, acupressure, trigger point, swedish, sports massage, etc)
                geared towards each individual’s needs and goals. Often I
                recommend at home practices to support the work we do in each
                session.
              </p>
            </div>
            <div className={`${utils.unit} ${styles.card}`}>
              <h4>Top surgery recovery:</h4>
              <p>
                Much lighter work to bring circulation to the healing area, help
                release compensation patterns that have developed due to
                binders/healing process, and also break up scar tissue.
              </p>
            </div>
            <div className={`${utils.unit} ${styles.card}`}>
              <h4>Infant Massage:</h4>
              <p>
                Very light work focused on asymmetries and resolving tension
                that could be causing the infant discomfort, problems feeding,
                or preferencing one side.
              </p>
            </div>
            <div className={`${utils.unit} ${styles.card}`}>
              <h4>Some Other Areas of Experience</h4>
              <p>
                Prenatal, Sports related injuries/tension, Scoliosis, Chronic
                Pain, Scar tissue, Fibromyalgia, Rotator
                injuries/rehabilitation, Plantar Fasciitis, Auto Injury/Trauma,
                Parkinson’s, Tendonitis, Frozen shoulder, Insomnia Arthritis,
                Carpel Tunnel Syndrome, Work-related pain & discomfort,
                Headaches & migraines, Anxiety/PTSD
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={utils.panelrow}>
            <div className={`${utils.unit} ${styles.card}`}>
              <h2>Service Pricing</h2>
              <h3>60 Minute Massage - $80</h3>
              <h3>75 Minute Massage - $95</h3>
              <h3>90 Minute Massage - $110</h3>
            </div>

            <div className={`${utils.unit} ${styles.card}`}>
              <h2>Sliding Scale Policy</h2>
              <p>
                I feel strongly that every person and all bodies should have
                access to massage. For anyone who is unable to receive bodywork
                due to finances, I provide a sliding scale of $50-70 for an hour
                massage. If this is you, please check the sliding scale option
                on your appointment request form. This is a service I am very
                happy & fortunate to be able to offer, and it is an honor to be
                able to support you in this way.
              </p>
            </div>
          </div>
          <div className={utils.panelrow}>
            <div className={`${utils.unit} ${styles.card}`}>
              <h2>Cancellation Policy</h2>
              <p>
                Life is not always predictable, but in the case you know ahead
                of time that you won’t be able to make it to your appointment,
                please let me know as soon as possible. Out of respect for my
                time and energy, all cancellations within 24 hours and no shows
                will be charged full price.
              </p>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default ServicesPage;
