import React from 'react';
import './About.css';

function About() {
  return (
    <div className="RTL">
    <div className="about-container">
      <h1 className="about-header">نبذة عن [اسم موقع القرآن الخاص بك]</h1>

      <p className="about-description">
        مرحبًا بكم في [اسم موقع القرآن الخاص بك] - منصة مكرسة لجمال وحكمة القرآن. في [اسم موقع القرآن الخاص بك]، نحن ملتزمون بجعل القرآن متاحًا وفهمًا وذلك من خلال إثراء قلوب الناس. مهمتنا هي إضاءة القلوب وتعزيز الوحدة من خلال المعرفة والفهم.
      </p>

      <h2 className="about-header">مهمتنا</h2>
      <ul className="about-list">
        <li>إضاءة القلوب</li>
        <li>التعلم الميسر</li>
        <li>التنوع الثقافي</li>
      </ul>

      <h2 className="about-header">ما ستجده هنا</h2>
      <ul className="about-list">
        <li>آيات القرآن</li>
        <li>التفسير والشروحات</li>
        <li>التلاوات الصوتية</li>
        <li>مواقع السجدة</li>
        <li>تعلم تفاعلي</li>
      </ul>

      <h2 className="about-header">لماذا تختارنا</h2>
      <ul className="about-list">
        <li>تجربة مستخدم ممتازة</li>
        <li>مصادر موثوقة</li>
        <li>دعم من المجتمع</li>
        <li>تحديثات مستمرة</li>
      </ul>

      <p className="about-conclusion">
        انضم إلينا في رحلة اكتشاف وإضاءة ونمو روحي من خلال القرآن. استكشف وتعلم وتواصل مع الإله من خلال حكمته وإرشاده في القرآن. مرحبًا بك في عالم المعرفة القرآنية. مرحبًا بك في [اسم موقع القرآن الخاص بك].
      </p>
    </div>
    </div>
  );
}

export default About;
