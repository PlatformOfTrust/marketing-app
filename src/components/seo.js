import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import mstile70 from '../images/mstile-70x70.png';
import mstile144 from '../images/mstile-144x144.png';
import mstile150 from '../images/mstile-150x150.png';
import mstile310 from '../images/mstile-310x310.png';
import mstile310x150 from '../images/mstile-310x150.png';

function SEO({ description, lang, meta, keywords, title }) {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription =
                    description || data.site.siteMetadata.description;
                return (
                    <Helmet
                        htmlAttributes={{
                            lang
                        }}
                        title={title}
                        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription
                            },
                            {
                                property: `og:title`,
                                content: title
                            },
                            {
                                property: `og:description`,
                                content: metaDescription
                            },
                            {
                                property: `og:type`,
                                content: `website`
                            },
                            {
                                name: `twitter:card`,
                                content: `summary`
                            },
                            // {
                            //   name: `twitter:creator`,
                            //   content: data.site.siteMetadata.author,
                            // },
                            {
                                name: `twitter:title`,
                                content: title
                            },
                            {
                                name: `twitter:description`,
                                content: metaDescription
                            },
                            {
                                name: `msapplication-TileColor`,
                                content: '#ffffff'
                            },
                            {
                                name: `msapplication-TileImage`,
                                content: `${mstile144}`
                            },
                            {
                                name: `msapplication-square70x70logo`,
                                content: `${mstile70}`
                            },
                            {
                                name: `msapplication-square150x150logo`,
                                content: `${mstile150}`
                            },
                            {
                                name: `msapplication-wide310x150logo`,
                                content: `${mstile310x150}`
                            },
                            {
                                name: `msapplication-square310x310logo`,
                                content: `${mstile310}`
                            }
                        ]
                            .concat(
                                keywords.length > 0
                                    ? {
                                          name: `keywords`,
                                          content: keywords.join(`, `)
                                      }
                                    : []
                            )
                            .concat(meta)}
                    />
                );
            }}
        />
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    keywords: []
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired
};

export default SEO;

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;
