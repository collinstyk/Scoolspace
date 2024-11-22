import React from "react";

import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, schema, route }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href={route} />
      {description && <meta name="description" content={description} />}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SEO;
