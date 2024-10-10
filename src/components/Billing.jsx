import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      About Us<br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      LaRing was born from the vision to create a safer world for women. We understand that personal safety is a basic human right, and technology can empower us to claim that right. Our team of engineers, designers, and safety experts have worked tirelessly to create a product that is discreet, stylish, and powerful – giving women the confidence to move through the world without fear.

Our mission is simple: Empowering safety through technology.
      </p>

    </div>
  </section>
);

export default Billing;
