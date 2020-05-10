
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ContactForm from '../components/contact/contact-form';

const Contact = () => (
  <Layout>
    <SEO title="Diversivo - Somos" />
    <div className="container">
      <div className="content flex-two-col">
        <div className="content__left order-s2-m1">
          <pre>Hablemos</pre>
          <h2>Existen muchas estrategias para potenciar tu marca en el mundo digital.</h2>
        </div>
        <div className="content__right order-s1-m2">
          <ContactForm />
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
