function Contact() {
  return (
    <main id="contact w-full h-full flex flex-col justify-center">
      <div className="w-full flex justify-center">
        <img src="/Images/Contact.svg" alt="Napisz do mnie" />
      </div>
      <form action="POST">
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" />
        <label htmlFor="title">Tytuł</label>
        <input type="text" name="title" />
        <label htmlFor="text">Wiadomość</label>
        <textarea name="text"></textarea>
        <button type="submit">Wyślij</button>
      </form>
    </main>
  );
}

export default Contact;
