import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
      Safety Tips <br className="sm:block hidden" />
       </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        • Always be aware of your surroundings: Keep an eye on what’s happening around you, especially in unfamiliar or crowded places. <br/>
        <br/>
        • Trust your instincts: If something doesn’t feel right, remove yourself from the situation. <br/>
        <br/>
        • Travel with friends when possible: There’s safety in numbers. Avoid walking alone in poorly lit or isolated areas. <br/>
        <br/>
        • Keep your phone charged and accessible: Ensure your phone has enough battery to make calls or send messages in case of emergencies. <br/>
        <br/>
        • Carry self-defense tools: Consider non-lethal self-defense tools like pepper spray or safety alarms, in addition to wearing LaRing.<br/>
        </p>
      </div>
    </div>
    
  </section>
);

export default Testimonials;
