import React from "react";
import Helmet from "react-helmet";
import favicon from "./../images/favicon-16x16.png";

const defaultDescription = "Marcin Gaszczak Junior Frontend Developer";
const defaultKeywords = "Junior Frontend Developer React";

const SEO = ({
  description = defaultDescription,
  lang = "en",
  meta = [],
  title = "Portfolio",
  keywords = defaultKeywords,
}) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    >
      <link rel="icon" href={favicon} />
    </Helmet>
  );
};

export default SEO;
