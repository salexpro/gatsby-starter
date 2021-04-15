import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/

import Layout from '../components/Layout'
import SEO from '../components/seo'

import { Container } from 'react-bootstrap'

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <h1>Howdy!</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-icon.png"
        layout="constrained"
        width={300}
        alt="A Gatsby logo"
        style={{ marginBottom: `1.45rem` }}
        placeholder="blurred"
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
      </p>
    </Container>
  </Layout>
)

export default IndexPage
