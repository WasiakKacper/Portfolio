function Nav() {
  return (
    <nav className="w-[60%] fixed bottom-0 left-1/2 -translate-x-1/2 bg-(--dark) rounded-t-3xl">
      <ul className="w-full h-15 text-(--white) text-2xl lg:text-4xl font-[Joan] flex flex-row justify-center gap-3 lg:gap-5 p-3 tracking-[3px] lg:tracking-[4px]">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Projekty</a>
        </li>
        <li>
          <a href="#">O mnie</a>
        </li>
        <li>
          <a href="#">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
