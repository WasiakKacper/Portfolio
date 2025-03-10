import Style from "../Styles.js";

function Contact() {
  return (
    <main id="contact w-full h-full flex flex-col justify-center">
      <div className="w-full flex justify-center">
        <img
          src="/Images/Contact.svg"
          alt="Napisz do mnie"
          className="scale-90"
        />
      </div>
      <form
        action="POST"
        className="w-[100%] h-full px-[20%] flex flex-col justify-center items-center pb-[5%]"
      >
        <div className="inputWrapper w-full flex flex-col md:flex-row gap-10 my-[2%]">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className={Style.inputText}
          />
          <input
            type="text"
            name="title"
            placeholder="Tytuł"
            className={Style.inputText}
          />
        </div>

        <textarea
          name="text"
          placeholder="Wiadomość..."
          className="bg-(--white) w-full h-90 rounded-4xl p-[2%] text-3xl font-[Joan] border-2 border-(--violet) outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-(--coral) font-[Joan] text-(--white) text-5xl py-[1%] px-[6%] mt-[3%] rounded-4xl cursor-pointer transition duration-300 ease hover:-translate-y-[10%]"
        >
          Wyślij
        </button>
      </form>
    </main>
  );
}

export default Contact;
