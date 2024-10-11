import style from "../style";

const Button = ({ styles }) => (
  <a href="#" target="_blank">
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-lg ${styles}`}style={{
        background: 'linear-gradient(to right, #bd8b46, #ffffff)', // Change #ffffff to your desired end color
      }}>
      Learn More
    </button>
  </a>
);

export default Button;
