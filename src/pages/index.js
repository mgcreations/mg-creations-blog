import * as React from "react";

// components
import Layout from "../components/layout";

// plugins
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm start a new site based on Gatsby CLI.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/icon.png"
      />
    </Layout>
  );
};

export default IndexPage;
