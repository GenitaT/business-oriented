import React, { Component } from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from '../components/Layout'
import SimpleHero from '../components/Home/SimpleHero'
import Banner from '../components/Home/Banner'
import styles from "../css/banner.module.css"
import Cards from '../components/Home/Cards'
import News from '../components/Home/News'
import Description from '../components/Home/Description'
import "bootstrap/dist/css/bootstrap.min.css"

export default () => (
  <Layout>
    <div class="row">
      <div class="col-md-6">
        <Description />
      </div>
      <div class="col-md-6">
        <News />
      </div>
    </div>
    <Cards />
    <SimpleHero>
      <Banner
        title="Parallax Background Section"
        info="Suspendisse gravida, ipsum a gravida euismod, metus enim hendrerit ante, vel hendrerit sapien sem non nisl. Maecenas tempus risus ipsum."
      >
        <AniLink to="/contact" className={styles.btnPrimary}>
          Contact Us
        </AniLink>
      </Banner>
    </SimpleHero>
  </Layout>
)

