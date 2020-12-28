import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'


const RootIndex = ({ data }) => {
	return (
		<Layout>
			<pre>{JSON.stringify(data, null, 4)}</pre>
		</Layout>
	)
}

export const query = graphql`
  {
    allContentfulHome(filter: {title: {eq: "Home-test"}}) {
      nodes {
        title
        description
      }
    }
  }
`

export default RootIndex