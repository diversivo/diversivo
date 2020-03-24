import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/inicio/main"
import SeccionQueHacemos from "../components/inicio/seccionQueHacemos"
import SeccionMejoresTecnologias from "../components/inicio/seccionMejoresTecnologias"
import Ccontact from "../components/Ccontact"

const IndexPage = () => (
  <Layout>
    <SEO title="Diversivo - Inicio" />
    <Main></Main>
    <SeccionQueHacemos></SeccionQueHacemos>
    <SeccionMejoresTecnologias></SeccionMejoresTecnologias>
    <Ccontact></Ccontact>
  </Layout>
)

export default IndexPage
