/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    // const blogTemplate = path.resolve(`src/templates/blog-template.js`);
    const newsTemplate = path.resolve(`src/templates/news-template.js`);
    const newsListTemplate = path.resolve(`src/templates/news-list-template.js`);
    const caseTemplate = path.resolve(`src/templates/case-template.js`);
    const eventTemplate = path.resolve(`src/templates/event-template.js`);
    const pricingTemplate = path.resolve(`src/templates/pricing-template.js`);
    return graphql(`
    {
        events: allMdx(
            filter: { frontmatter: { potevent: { eq: true } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                        shorttitle
                        potevent
                        time
                        place
                        eventlink
                        subtype
                        pictext
                        pic
                        lang
                        status
                    }
                }
            }
        }
        news: allMdx(
            filter: { frontmatter: { type: { eq: "news" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        type
                        author
                        authorpic
                        pic
                        pictext
                        subtype
                    }
                }
            }
        }
        cases: allMdx(
            filter: { frontmatter: { type: { eq: "case" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        type
                        author
                        pic
                        pictext
                        subtype
                    }
                }
            }
        }
        
        pricing: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "pricing" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    html
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        type
                    }
                }
            }
        }
    }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }
        
        const events = result.data.events.edges
        events.forEach(({ node }, index ) => {
            const prev = index === 0 ? null : events[index - 1].node
            const next = index === events.length - 1 ? null : events[index + 1].node
            createPage({
                path: node.frontmatter.path,
                component: eventTemplate,
                context: {
                    prev,
                    next
                }
            });
        });
        
        // Create news-list pages
        const posts = result.data.news.edges
        const postsPerPage = 10
        const numPages = Math.ceil(posts.length / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/news` : `/news/${i + 1}`,
            component: path.resolve(newsListTemplate),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
            },
          })
        })

        result.data.news.edges.forEach(({ node }, index ) => {
            const prev = index === 0 ? null : posts[index - 1].node
            const next = index === posts.length - 1 ? null : posts[index + 1].node
            createPage({
                path: node.frontmatter.path,
                component: newsTemplate,
                context: {
                    prev,
                    next
                } 
            });
        });

        
        const cases = result.data.cases.edges
        cases.forEach(({ node }, index ) => {
            const prev = index === 0 ? null : cases[index - 1].node
            const next = index === cases.length - 1 ? null : cases[index + 1].node
            createPage({
                path: node.frontmatter.path,
                component: caseTemplate,
                context: {
                    prev,
                    next
                }
            });
        });

        result.data.pricing.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: pricingTemplate,
                context: {} // additional data can be passed via context
            });
        });
    });
};