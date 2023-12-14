import Form from "react-bootstrap/Form";
import "../components/Contact.css";

function Contact() {
  return (
    <main
      style={{
        marginTop: "3%",
        backgroundColor: "#f8d4bd",
        height: "auto",
        paddingBottom: "8px",
      }}
    >
      <section className="form-contact-main">
        <Form className="form-contact">
          <h3 style={{marginBottom: "10px"}}>Contact-us</h3>
          <Form.Group className="email-contact mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="abc@example.com" />
          </Form.Group>
          <Form.Group className="message-contact mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <button className="contact-button">Send</button>
        </Form>
      </section>
      <p className="copyright-contact">
        Copyright &copy; 2023 | All Rights Reserved.
      </p>
    </main>
  );
}

export default Contact;
