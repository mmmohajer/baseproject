import Head from 'next/head';

import { IS_STAGING_ENV } from 'config';

const Seo = ({ title, keywords, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta charSet="UTF-8" />
        {IS_STAGING_ENV && <meta name="robots" content="nofollow" />}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </Head>
      {children}
    </>
  );
};

Seo.defaultProps = {
  title: 'Page Title',
  description: `Site Description`,
  keywords: 'keyword 1, keyword 2'
};

export default Seo;
