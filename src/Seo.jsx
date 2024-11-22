import React from "react";

import { Helmet } from "react-helmet";

const SEO = ({ title, description, schema }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="https://www.scoolspace.com" />
      {description && <meta name="description" content={description} />}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SEO;
