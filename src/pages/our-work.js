
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../components/commons/contact';
import MainSlider from '../components/commons/main-slider';
import Service from '../components/our-work/slider/service';

import MainImage from '../assets/images/our-work.jpg';
import BrandingImg from '../assets/images/branding.png';
import MarketingImg from '../assets/images/marketing.png';
import SoftwareDevelopmentImg from '../assets/images/software-development.png';
import WebsAndApps from '../assets/images/webs-y-apps.jpg';

const OurWork = () => (
  <Layout>
    <SEO title="Diversivo - Que Hacemos" />
    <div className="container">
      <MainSlider
        pre="QUE HACEMOS"
        title="Creamos marcas, productos y servicios digitales que conectan."
        img={MainImage}
        alt="test"
      />
      <Service
        category="branding"
        header="Hacemos que las marcas expresen su personalidad y valores de manera consistente y memorable."
        // text="Creando vínculos con sus clientes que les permitan tener duraderas y nutritivas relaciones."
        img={BrandingImg}
        alt="Servicio de Branding - ilustración por Diversivo."
        cssClass="row-reverse"
      />
      <Service
        category="marketing digital"
        header="Posicionamos marcas y servicios en un mundo digital con diseño y analítica de datos."
        // text="El Marketing Digital es ciencia y diseño."
        img={MarketingImg}
        alt="Servicio de Marketing Digital - ilustración por Diversivo."
        cssClass="row"
      />
      <Service
        category="desarrollo de Software"
        header="Desarrollamos software a medida con metodologías ágiles para automatizar procesos y generar valor."
        // text="El mejor software es siempre a tu medida."
        img={SoftwareDevelopmentImg}
        alt="Servicio de Desarrollo de Software - ilustración por Diversivo."
        cssClass="row-reverse"
      />
      <Service
        category="web's y apps"
        header="Digitalizamos ideas utilizando las últimas tecnologías web y móviles para acercar clientes a las marcas."
        // text="La interacción digital genera oportunidades y clientes."
        img={WebsAndApps}
        alt="Servicio de Marketing Digital - ilustración por Diversivo."
        cssClass="row"
      />
    </div>
    <Contact />
  </Layout>
);

export default OurWork;
