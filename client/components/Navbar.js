import style from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useRouter from "next/router";
import useTheme from "./hooks/useTheme";
const Navbar = ({ handleChange, value }) => {
  const [theme, setTheme] = useTheme();
  const router = useRouter;
  return (
    <nav className={theme === "light" ? style.navLight : style.navDark}>
      <div className={style.inputContainer}>
        <FontAwesomeIcon icon={faSearch} className={style.searchIcon} />
        <input
          className={style.input}
          type="text"
          name="search"
          placeholder="Maqolani qidiring"
          onChange={handleChange}
          value={value}
          autoComplete="off"
        />
      </div>
      <h1 className={style.h1}>Mening Maqolam</h1>
      <div className={style.content}>
        <img
          className={style.profile}
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          title="profile"
        />
        {/* <FontAwesomeIcon className={style.icon} icon={faGear} /> */}
        <svg
          onClick={() => router.push("/setting")}
          xmlns="http://www.w3.org/2000/svg"
          className={style.icon}
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="red"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
