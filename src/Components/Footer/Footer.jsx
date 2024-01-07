import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
    <div className="RTL">
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/* روابط وسائل التواصل الاجتماعي */}
              <h5>تواصل معنا</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook" /> فيسبوك
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" /> تويتر
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" /> انستجرام
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              {/* معلومات الاتصال */}
              <h5>اتصل بنا</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-map-marker-alt" /> 123 شارع الرئيس، مدينتك
                </li>
                <li>
                  <i className="fas fa-phone" /> (123) 456-7890
                </li>
                <li>
                  <i className="fas fa-envelope" />{" "}
                  <a href="mailto:info@example.com">info@example.com</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              {/* روابط إضافية */}
              <h5>روابط سريعة</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">سياسة الخصوصية</a>
                </li>
                <li>
                  <a href="#">شروط الخدمة</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

export default Footer;
