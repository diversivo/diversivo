import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SeccionMejoresTecnologias from "../components/inicio/seccionMejoresTecnologias"
import Ccontact from "../components/Ccontact"
import MainSecondary from "../components/mainSecondary"

import MainImage from "../images/somos-head.png"

const QueHacemos = () => (
  <Layout>
    <SEO title="Diversivo - Que Hacemos" />

    <div className="container">
    <MainSecondary title="Conectamos personas con marcas y organizaciones." img={MainImage} alt="test"></MainSecondary>
    </div>

    <SeccionMejoresTecnologias></SeccionMejoresTecnologias>
    <Ccontact></Ccontact>
  </Layout>
)

export default QueHacemos
