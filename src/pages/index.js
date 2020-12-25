import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {

    return (
      <Layout>
        <div style={{ background: '#fff' }}>
          <p>Home Page</p>
        </div>
      </Layout>
    )
  }
}

export default RootIndex