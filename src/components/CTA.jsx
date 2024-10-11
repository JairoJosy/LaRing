import styles from "../style"
import Button from "./Button"
import ButtonC from "./Button copy"

const CTA = () => 
  (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Have Suggestions ?</h2>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>Have ideas or suggestions? We're all ears! Your feedback is invaluable to us, and together we can shape the future of LaRing to better meet your needs and enhance safety for everyone.</p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <ButtonC/>
      </div>
    </section>
  )


export default CTA