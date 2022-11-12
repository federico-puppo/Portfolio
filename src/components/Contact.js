import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useTranslation } from 'react-i18next';

emailjs.init(process.env.REACT_APP_PUBLIC_KEY)

export const Contact = () => {

  const { t } = useTranslation();

  const formDefault = { firstName: '', lastName: '', email: '', phone: '', message: '' }
  const [form, setForm] = useState(formDefault);
  const [buttonText, setButtonText] = useState(t('common.send'));
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setForm({
      ...form,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText(t('common.sending'));
    const name = (form.firstName + " " + form.lastName);
    const email = form.email;
    const message = form.message;
    const phone = form.phone;
    const templateParams = { name, email, message, phone }
    let response = await emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY)
    setButtonText(t('common.send'));
    setForm(formDefault);
    
    if (response.status === 200) {
      setStatus({ succes: true, message: t('contact.success') });
      setForm(formDefault);
      setTimeout(() => setStatus({}), 5000);
    } else {
      setStatus({ succes: false, message: t('contact.fail') });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{t('contact.desc')} </h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={form.firstName} required placeholder={t('contact.name')} onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={form.lastName} required placeholder={t('contact.lastName')} onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={form.email} required placeholder={t('contact.email')} onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={form.phone} required placeholder={t('contact.phone')} onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <textarea rows="6" value={form.message} required placeholder={t('contact.message')} onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <hr></hr>
                        {status.message && <p className={status.succes ? "success" : "danger"}>{status.message}</p>}
                        <hr></hr>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
