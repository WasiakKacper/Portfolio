import Style from "../Styles.js";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  //Sending email
  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;

  const form = useRef();
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [isSend, setIsSend] = useState(false);

  const [isEmail, setIsEmail] = useState(false);
  const [isTitle, setIsTitle] = useState(false);
  const [isMessage, setIsMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const errors = {
      email:
        !email.trim() ||
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email),
      title: !title.trim(),
      message: !message.trim(),
    };

    setIsEmail(errors.email);
    setIsTitle(errors.title);
    setIsMessage(errors.message);

    if (errors.email || errors.title || errors.message) {
      console.log("Form contains errors, fix them before sending.");
      return;
    }

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );

    setEmail("");
    setTitle("");
    setMessage("");
    setIsEmail(false);
    setIsTitle(false);
    setIsMessage(false);
    setIsSend(true);
  };

  return (
    <section
      className={`w-full h-full lg:h-[950px] flex flex-col lg:flex-row px-[3%] py-[3%] pb-30 lg:pb-0 justify-between ${
        isSend ? "blur-none" : ""
      }`}
    >
      {isSend ? (
        <>
          {/* POP-UP */}
          <div className="fixed w-[90%] md:w-[90%] lg:w-[30%] h-[40%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl bg-(--white) font-[Jost] font-medium flex flex-col justify-around items-center rounded-2xl z-100 border-1 border-(--dark)">
            <h2>Wysłano</h2>
            <button
              onClick={() => {
                setIsSend(false);
              }}
              className={`text-6xl font-medium text-(--white) py-[2%] px-[5%] bg-(--dark) rounded-2xl cursor-pointer hover:scale-105 transition`}
            >
              Ok
            </button>
          </div>
          <div className="fixed w-[100%] h-[100%] backdrop-blur-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-0 m-0"></div>
        </>
      ) : null}
      {/* CONTACT */}
      <div className=" w-full lg:w-[40%]">
        <img
          src="/Images/Contact.svg"
          alt="Napisz do mnie"
          className="mt-[15%] mx-auto lg:mx-0"
        />
      </div>
      {/* FORM */}
      <form
        ref={form}
        className=" w-full lg:w-[60%] h-[90%] bg-(--dark) p-[5%] mt-5 lg:mt-0 flex flex-col **:rounded-2xl **:font-[Jost]"
        onSubmit={sendEmail}
      >
        <div className="flex flex-col lg:flex-row justify-between mt-[2%] *:text-3xl *:w-full md:*:w-[48%] *:flex *:flex-col">
          <label>
            <span className={Style.inputTextSpan}>
              {isEmail ? "Pole nie może być puste!" : "E-mail:"}
            </span>
            <input
              type="email"
              name="email"
              className={Style.inputText}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label>
            <span className={Style.inputTextSpan}>
              {isTitle ? "Pole nie może być puste!" : "Temat:"}
            </span>
            <input
              type="text"
              name="title"
              className={Style.inputText}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>
        </div>
        <label className="w-full h-[70%] flex flex-col mt-[5%]">
          <span className={Style.inputTextSpan}>
            {isMessage ? "Pole nie może być puste!" : "Wiadomość:"}
          </span>
          <textarea
            name="message"
            className="h-[200px] lg:h-full bg-(--white) p-[1%]"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
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
