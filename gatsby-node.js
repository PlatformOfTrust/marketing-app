/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const locales = require('./src/locales/index');

const pathMap = {
    'cases': 'kayttotapaukset',
    'news': 'ajankohtaiset',
    'events': 'tapahtumat',
    'about': 'tietoameista',
    'contact': 'yhteystiedot'
};

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
                        locale
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
                        locale
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
                        locale
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
                const localizedPath = locales[lang].default ? pagePath : `${locales[lang].path}${pagePath}`;
                console.log('creating path for events', localizedPath);
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
        posts.forEach(({ node }, index) => {
            Object.keys(locales).map(lang => {
                const pagePath = '/news';
                let localizedPath = locales[lang].default ? pagePath : `${locales[lang].path}${pagePath}`;

                console.log('creating path for news root', localizedPath);
                createPage({
                    path: localizedPath,
                    component: path.resolve(newsListTemplate),
                    context: {
                        pagePath,
                        locale: lang
                    }
                });
            });
        });


        result.data.news.edges.forEach(({ node }, index) => {
            const getPrevious = (index) => {
                const prev = index === 0 ? null : posts[index - 1].node;

                if (prev) {

                    if (prev.frontmatter.locale === node.frontmatter.locale) {
                        return prev;
                    } else {
                        return getPrevious(index - 1);
                    }

                } else {
                    return null;
                }
            };

            const getNext = (index) => {
                const next = index === posts.length - 1 ? null : posts[index + 1].node;

                if (next) {

                    if (next.frontmatter.locale === node.frontmatter.locale) {
                        return next;
                    } else {
                        return getNext(index + 1);
                    }

                } else {
                    return null;
                }

            };

            const next = getNext(index);
            const prev = getPrevious(index);

            const pagePath = node.frontmatter.path;
            console.log('creating path for news', pagePath, node.frontmatter.locale);
            createPage({
                path: pagePath,
                component: newsTemplate,
                context: {
                    prev,
                    next,
                    pagePath,
                    locale: node.frontmatter.locale
                }
            });
        });


        const cases = result.data.cases.edges;
        cases.forEach(({ node }, index) => {
            const getPrevious = (index) => {
                const prev = index === 0 ? null : cases[index - 1].node;

                if (prev) {

                    if (prev.frontmatter.locale === node.frontmatter.locale) {
                        return prev;
                    } else {
                        return getPrevious(index - 1);
                    }

                } else {
                    return null;
                }
            };

            const getNext = (index) => {
                const next = index === cases.length - 1 ? null : cases[index + 1].node;

                if (next) {

                    if (next.frontmatter.locale === node.frontmatter.locale) {
                        return next;
                    } else {
                        return getNext(index + 1);
                    }

                } else {
                    return null;
                }

            };

            const next = getNext(index);
            const prev = getPrevious(index);

            const pagePath = node.frontmatter.path;
            createPage({
                path: pagePath,
                component: caseTemplate,
                context: {
                    prev,
                    next,
                    pagePath,
                    locale: node.frontmatter.locale
                }
            });
        });

        result.data.pricing.edges.forEach(({ node }) => {
            Object.keys(locales).map(lang => {
                const pagePath = node.frontmatter.path;
                const localizedPath = locales[lang].default ? pagePath : `${locales[lang].path}${pagePath}`;
                console.log('creating path for pricing', localizedPath);
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
    const { createPage, deletePage } = actions;

    return new Promise(resolve => {
        Object.keys(locales).map(lang => {
            const url = (page.context && page.context.frontmatter && page.context.frontmatter.path) || page.path;
            if (url.indexOf('dev-404') === -1) {
                if (Object.keys(page.context).length === 0) {

                    let localizedPath = locales[lang].default ? url : locales[lang].path + url;

                    if (!locales[lang].default) {
                        Object.keys(pathMap).map((key) => {
                            localizedPath = localizedPath.replace(key, pathMap[key]);
                        });
                    }

                    console.log('onCreatePage', 'creating page', localizedPath);

                    createPage({
                        ...page,
                        path: localizedPath,
                        context: {
                            locale: lang
                        }
                    });
                } else {
                    return deletePage(page);
                }
            }
        });

        resolve();
    });
};
