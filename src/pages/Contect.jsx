export const Contect = () => {
    const handleFormSubmit =(formdata)=>{
        //easly send the form input data use this method
        const formInputData=Object.fromEntries(formdata.entries());
        // console.log(formInputData);
    }
  return (
    <section className="section-contect">
      <h2 className="container-title">Contect Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter the name"
            name="username"
          ></input>
          <input
            type="email"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter the email"
            name="mail"
          ></input>
          <textarea
            className="form-control"
            rows="8"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="false"
          ></textarea>
          <button type="submit" className="Btn"></button>
        </form>
      </div>
    </section>
  );
};
