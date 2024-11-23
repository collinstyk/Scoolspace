// import React from "react";

// import { Helmet } from "react-helmet-async";

// const SEO = ({ title, description, schema, route }) => {
//   return (
//     <Helmet>
//       <meta charSet="utf-8" />
//       <title>{title}</title>
//       <link rel="canonical" href={route} />
//       {description && <meta name="description" content={description} />}
//       <script type="application/ld+json">{JSON.stringify(schema)}</script>
//     </Helmet>
//   );
// };

// export default SEO;

import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ path }) => (
  <>
    <Helmet>
      <title>The New School</title>
      <meta
        name="description"
        content="A new way to teach, learn, and love. Unlock a connected, engaging, and efficient education experience for parents, students, teachers, and school administrators."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="The New School" />
      <meta
        property="og:description"
        content="A new way to teach, learn, and love. Unlock a connected, engaging, and efficient education experience for parents, students, teachers, and school administrators."
      />
      <meta property="og:image" content="/logo.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.scoolspace.com/" />
      <link rel="icon" href="/favicon.ico" sizes="16x16" />
      <link rel="icon" type="image/png" href="/logo.png" sizes="192x192" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <meta
        name="google-site-verification"
        content="iGb7AZZVBphAYk6wcWVi9sVHj-JX0nqcfsxR1l7y6es"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <link rel="canonical" href={path} />
    </Helmet>
  </>
);

export default SEO;
