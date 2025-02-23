import Styles from "../../Styles.js";

function Nav() {
  return (
    <nav className="w-[60%] fixed bottom-0 left-1/2 -translate-x-1/2 bg-(--dark) rounded-t-3xl">
      <ul className="w-full h-15 text-(--white) text-2xl lg:text-4xl font-[Joan] flex flex-row justify-center lg:gap-5 p-3 tracking-[3px] lg:tracking-[4px]">
        <li>
          <a href="#" className={Styles.aTag}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={Styles.aTag}>
            Projekty
          </a>
        </li>
        <li>
          <a href="#" className={Styles.aTag}>
            O mnie
          </a>
        </li>
        <li>
          <a href="#" className={Styles.aTag}>
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
