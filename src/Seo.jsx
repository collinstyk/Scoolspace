import React from "react";

import { Helmet } from "react-helmet";

const SEO = ({ title, description, schema }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SEO;
// Schema.org - Schema.org
// Schema.org is a set of extensible schemas that enables webmasters to embed
//     structured data on their web pages for use by search engines and other applications.
