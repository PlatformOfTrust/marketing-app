import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import ContactBlurb from './ContactBlurb';

const StyledContactBlurbs = styled.section``;

const ContactBlurbs = props => (
    <StyledContactBlurbs className="contact-blurbs row">
        {props.contacts.edges.map(({ node }) => (
            <ContactBlurb
                key={node.id}
                name={node.frontmatter.name}
                pic={node.frontmatter.pic}
                title={node.frontmatter.title}
                phone={node.frontmatter.phone}
                email={node.frontmatter.email}
                twitter={node.frontmatter.twitter}
                linkedin={node.frontmatter.linkedin}
            />
        ))}
    </StyledContactBlurbs>
);

export default ContactBlurbs;
