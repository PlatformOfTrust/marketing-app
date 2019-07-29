/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const locales = require('./src/locales/index');

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

        const events = result.data.events.edges;
        events.forEach(({ node }, index) => {
            const prev = index === 0 ? null : events[index - 1].node;
            const next = index === events.length - 1 ? null : events[index + 1].node;
            Object.keys(locales).map(lang => {
                const pagePath = node.frontmatter.path;
                const localizedPath = `${locales[lang].path}${pagePath}`;
                console.log('creating path', localizedPath);
                createPage({
                    path: localizedPath,
                    component: eventTemplate,
                    context: {
                        prev,
                        next,
                        pagePath,
                        locale: lang
                    }
                });
            });
        });

        // Create news-list pages
        const posts = result.data.news.edges;
        const postsPerPage = 10;
        const numPages = Math.ceil(posts.length / postsPerPage);
        Array.from({ length: numPages }).forEach((_, i) => {
            const pagePath = (i === 0 ? `/news` : `/news/${i + 1}`);
            Object.keys(locales).map(lang => {
                const localizedPath = `${locales[lang].path}${pagePath}`;
                console.log('creating path', localizedPath);
                createPage({
                    path: localizedPath,
                    component: path.resolve(newsListTemplate),
                    context: {
                        limit: postsPerPage,
                        skip: i * postsPerPage,
                        numPages,
                        currentPage: i + 1,
                        pagePath,
                        locale: lang
                    }
                });
            });
        });

        result.data.news.edges.forEach(({ node }, index) => {
            const prev = index === 0 ? null : posts[index - 1].node;
            const next = index === posts.length - 1 ? null : posts[index + 1].node;
            Object.keys(locales).map(lang => {
                const pagePath = node.frontmatter.path;
                const localizedPath = `${locales[lang].path}${pagePath}`;
                console.log('creating path', localizedPath);
                createPage({
                    path: localizedPath,
                    component: newsTemplate,
                    context: {
                        prev,
                        next,
                        pagePath,
                        locale: lang
                    }
                });
            });
        });


        const cases = result.data.cases.edges;
        cases.forEach(({ node }, index) => {
            const prev = index === 0 ? null : cases[index - 1].node;
            const next = index === cases.length - 1 ? null : cases[index + 1].node;

            Object.keys(locales).map(lang => {
                const pagePath = node.frontmatter.path;
                const localizedPath = `${locales[lang].path}${pagePath}`;
                console.log('creating path', localizedPath);
                createPage({
                    path: localizedPath,
                    component: caseTemplate,
                    context: {
                        prev,
                        next,
                        pagePath,
                        locale: lang
                    }
                });
            });
        });

        result.data.pricing.edges.forEach(({ node }) => {
            Object.keys(locales).map(lang => {
                const pagePath = node.frontmatter.path;
                const localizedPath = `${locales[lang].path}${pagePath}`;
                console.log('creating path', localizedPath);
                createPage({
                    path: localizedPath,
                    component: pricingTemplate,
                    context: {
                        pagePath,
                        locale: lang
                    } // additional data can be passed via context
                });
            });
        });
    });
};


exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage, createRedirect } = actions;
    return new Promise(resolve => {
        Object.keys(locales).map(lang => {
            const url = (page.context && page.context.frontmatter && page.context.frontmatter.path) || page.path;
            if (url.indexOf('dev-404') === -1) {
                if (Object.keys(page.context).length === 0) {
                    const localizedPath = locales[lang].path + url;
                    console.log('Creating page', url, localizedPath);

                    createPage({
                        ...page,
                        path: localizedPath,
                        context: {
                            locale: lang
                        }
                    });

                    /* Set /en by default */
                    if (url === '/') {
                        if (locales[lang].default) {
                            // '/' + localizedPath.replace('/', '') otherwise gatsby creates a chain of redirections
                            console.log('Creating redirect from', url, 'to', '/' + localizedPath.replace('/', ''));
                            createRedirect({
                                fromPath: url,
                                toPath: '/' + localizedPath.replace('/', ''),
                                isPermanent: false,
                                redirectInBrowser: true
                            });
                        }
                        console.log('Delete', url);
                        return deletePage(page);
                    } else {
                        console.log('Delete', url);
                        return deletePage(page);
                    }
                } else {
                    console.log('Delete', url);
                    return deletePage(page);
                }
            }
        });

        resolve();
    });
};
