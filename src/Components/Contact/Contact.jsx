import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-container">
      <h1 className="contact-header">اتصل بنا</h1>

      <p className="contact-description">
        نحن هنا لتلبية احتياجاتك والاستجابة لاستفساراتك. لا تتردد في الاتصال بنا عبر الوسائل التالية:
      </p>

      <div className="contact-info">
        <div>
          <h2>البريد الإلكتروني:</h2>
          <p>example@example.com</p>
        </div>

        <div>
          <h2>رقم الهاتف:</h2>
          <p>+123456789</p>
        </div>
      </div>

      <p className="contact-description">
        يمكنك أيضًا ملء النموذج أدناه للاتصال بنا. سنعود إليك في أقرب وقت ممكن.
      </p>

      <form>
        <div className="form-group">
          <label>الاسم:</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>البريد الإلكتروني:</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label>رسالتك:</label>
          <textarea className="form-control" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">إرسال</button>
      </form>
    </div>
  );
}

export default ContactUs;
