import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"

const About = () => (
  <Layout page='4'>
    <SEO title="A propos" />
    <h1>A propos</h1>
    <Bio />
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil amet quod, a doloribus ea esse suscipit laborum quo sint dolores?</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
