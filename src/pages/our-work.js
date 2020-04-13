
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../components/commons/contact';
import MainSlider from '../components/commons/main-slider';
import MainImage from '../assets/images/somos-head.png';
import Service from '../components/our-work/slider/service';

import BrandingImg from '../assets/svg/stylesheet/branding.svg';
import MarketingImg from '../assets/svg/stylesheet/digital-marketing.svg';
import SoftwareDevelopmentImg from '../assets/svg/stylesheet/software-development.svg';
import WebsAndApps from '../assets/svg/stylesheet/webs-and-apps.svg';

const OurWork = () => (
  <Layout>
    <SEO title="Diversivo - Que Hacemos" />
    <div className="container">
      <MainSlider
        title="Conectamos personas con marcas y organizaciones."
        img={MainImage}
        alt="test"
      />
      <Service
        category="Branding"
        header="Hacemos que las marcas expresen su personalidad y valores de manera consistente y memorable."
        text="Creando vínculos con sus clientes que les permitan tener duraderas y nutritivas relaciones."
        img={BrandingImg}
        alt="Servicio de Branding - ilustración por Diversivo."
        cssClass="row"
      />
      <Service
        category="Marketing Digital"
        header="Posicionamos marcas y servicios en un mundo digital con diseño y analítica de datos."
        text="El Marketing Digital es ciencia y diseño."
        img={MarketingImg}
        alt="Servicio de Marketing Digital - ilustración por Diversivo."
        cssClass="row-reverse"
      />
      <Service
        category="Desarrollo de Software"
        header="Desarrollamos software a medida con metodologías ágiles para automatizar procesos y generar valor."
        text="El mejor software es siempre a tu medida."
        img={SoftwareDevelopmentImg}
        alt="Servicio de Desarrollo de Software - ilustración por Diversivo."
        cssClass="row"
      />
      <Service
        category="Web's y Apps"
        header="Digitalizamos ideas utilizando las últimas tecnologías web y móviles para acercar clientes a las marcas."
        text="La interacción digital genera oportunidades y clientes."
        img={WebsAndApps}
        alt="Servicio de Marketing Digital - ilustración por Diversivo."
        cssClass="row-reverse"
      />
    </div>
    <Contact />
  </Layout>
);

export default OurWork;
