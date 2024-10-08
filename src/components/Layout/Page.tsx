import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta
          content="ESOL classes, Learning English in Nottingham, Nottingham, ESOL, IELTS, Business English, Learning English, Speaking Classes, IELTS in Nottingham, English"
          name="keywords"
        />
        <meta content="index, follow" name="robots" />
        <meta
          content="index, follow, imageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
          name="googlebot"
        />
        <meta content="AndrewThien" name="author" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link href={`https://langlounge.uk${pathname}`} key="canonical" rel="canonical" />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content="https://langlounge.uk/logo.png" property="og:image:url" />
        <meta content="500" property="og:image:width" />
        <meta content="500" property="og:image:height" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
