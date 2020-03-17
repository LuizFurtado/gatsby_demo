import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Latest Posts</h1>
    { data.allMarkdownRemark.edges.map(post => (
        <div>
            <h2>{ post.node.frontmatter.title }</h2>
            <small>Posted by { post.node.frontmatter.author } on { post.node.frontmatter.date }</small>
            <br />
            <Link to={ post.node.frontmatter.path }>Read more...</Link>
            <br />
            <br />
            <hr />
        </div>
    ))}
  </Layout>
)

export const pageQuery = graphql `
    query BlogIndexQuery {
            allMarkdownRemark {
             edges {
              node {
                id
                frontmatter {
                  path
                  title
                  date
                  author
                }
              }
            } 
        }
    }
`

export default BlogPage
