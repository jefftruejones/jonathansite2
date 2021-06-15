// import Link from "next/link";
import utils from "../styles/utils.module.css";
import styles from "./styles/reviews.module.css";
import Layout from "../components/layout";
export default function Reviews() {
  return (
    <Layout>
      <div className={utils.panelcolumn}>
        <div className={styles.review}>
          <p className={styles.p}>
            {" "}
            <i>
              I started receiving massage therapy from Jonathan several months
              ago. As a mother of two small children, I was feeling the need for
              more self care and I was thrilled to receive such skilled
              treatments from Jonathan. I experienced him deeply listening and
              hearing my physical complaints and understanding what I needed to
              feel relief and rejuvenation. One week, I had re-injured my back
              and his massage had me feeling near completely healed. If you are
              looking for more relaxation and rejuvenation, or you are needing
              help with a more serious issue, I highly recommend Jonathan to
              give you the support you need!
            </i>
            <p> - Rebecca</p>
          </p>{" "}
        </div>
        <div className={styles.review}>
          <p className={styles.p}>
            {" "}
            <i>
              {" "}
              I experience Jonathan as a compassionate, intuitive and
              knowledgeable therapist. I first started seeing him after I was in
              a pretty bad car accident. I had incredible shoulder and neck pain
              that was keeping me up at night. After a few weeks of working with
              Jonathan, I finally experienced the relief I was looking for. Not
              only did I experience relief in my body, I also experienced relief
              in my nervous system. Jonathan is unique in that he creates an
              empathic, safe space so that I am able to be exactly where I am
              at. Thank you!
            </i>
            <p> -Kara</p>
          </p>{" "}
        </div>
        <div className={styles.review}>
          <p className={styles.p}>
            {" "}
            <i>
              {" "}
              Jonathan has given massages to me and my family and friends for
              years. I’ve heard uniformly positive reviews from them, along with
              my own experiences with him. He is a lovely person, with a gentle,
              professional and warm presence. He was always able to work with
              people’s challenges and preferences, in a way that is very
              skillful. I recommend Jonathan highly, without any reservations!
              I’m always happy when he comes to Florida, to be able to work him
              once again.
            </i>
            <p> -Jan</p>
          </p>{" "}
        </div>
        <div className={styles.review}>
          <p className={styles.p}>
            {" "}
            <i>Jonathan is intuitive, highly skilled, and effective.</i>
            <p> -Andrea</p>
          </p>{" "}
        </div>
        <div className={styles.review}>
          <p className={styles.p}>
            {" "}
            <i>
              {" "}
              He is an excellent massage therapist. Jonathan listens to what you
              need and focuses on the areas that need the work.
            </i>
            <p> -Heather</p>
          </p>{" "}
        </div>

        <div className={styles.reviewlast}>
          <p className={styles.plast}>
            {" "}
            <i>
              I don't want to oversell his skill as a massage therapist for fear
              of making it sound too good to be true, because to be honest, it
              almost is. Never have I had a massage from a professional more
              intuitive and thorough. I have had massages at day spas and
              chiropractic offices, and Jonathan's techniques combine the best
              of both worlds. I leave our sessions feeling fully relaxed, and
              with an improvement in the health and functionality of my muscles
              and joints.
            </i>
          </p>
          <p className={styles.plast}>
            {" "}
            <i>
              When I tell him where I have pain and discomfort, he *listens to
              me*, which in my experience is very unusual from lmbts. Many, I
              feel, just go through the motions. Every time Jonathan massages
              me, I am left with the feeling that he really cares about my
              experience and health and wants to see improvement in my mobility
              and emotional health in a way I can take forward into my daily
              life.
            </i>
          </p>
          <p className={styles.plast}>
            {" "}
            <i>
              {" "}
              So many times, I have come to him completely unable to turn my
              head (from a previous car accident injury), and I leave not only
              more relaxed and in less pain, but with an obvious and immediate
              improvement in mobility.
            </i>
          </p>
          <p className={styles.plast}>
            {" "}
            <i>
              This is because Jonathan does not just focus on relaxing
              techniques, but also science-based modes to facilitate and improve
              physical health. He always ends each session with home-care
              instructions so I can continue to see improvement after I have
              left. This is why at this point, Jonathan is the only person I
              will book to massage me. The level of professionalism, attention
              to detail, and intuition makes me feel as though I am literally in
              the best hands imaginable.
            </i>
            <p> -Jeff</p>
          </p>{" "}
        </div>
      </div>
    </Layout>
  );
}
