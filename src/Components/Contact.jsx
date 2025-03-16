import Style from "../Styles.js";

function Contact() {
  return (
    <section className="w-full h-full lg:h-[950px] flex flex-col lg:flex-row px-[3%] py-[3%] pb-30 lg:pb-0 justify-between">
      <div className=" w-full lg:w-[40%]">
        <img
          src="/Images/Contact.svg"
          alt="Napisz do mnie"
          className="mt-[15%] mx-auto lg:mx-0"
        />
      </div>
      <form
        action=""
        className=" w-full lg:w-[60%] h-[90%] bg-(--dark) p-[5%] mt-5 lg:mt-0 flex flex-col **:rounded-2xl **:font-[Jost]"
      >
        <div className="flex flex-col lg:flex-row justify-between mt-[2%] *:text-3xl w-full md:*:[48%] *:flex *:flex-col">
          <label>
            <span className={Style.inputTextSpan}>E-mail:</span>
            <input type="email" name="email" className={Style.inputText} />
          </label>
          <label>
            <span className={Style.inputTextSpan}>Temat:</span>
            <input type="topic" name="topic" className={Style.inputText} />
          </label>
        </div>
        <label className="w-full h-[70%] flex flex-col mt-[5%]">
          <span className={Style.inputTextSpan}>Wiadomosc:</span>
          <textarea
            name="messange"
            className="h-full bg-(--white) p-[1%]"
          ></textarea>
        </label>

        <button className=" w-full lg:w-[30%] bg-(--white) p-[1%] mt-[7%] text-4xl text-(--dark) font-medium hover:-translate-y-2 transition duration-300 ease cursor-pointer">
          Wyślij
        </button>
      </form>
    </section>
  );
}

export default Contact;
