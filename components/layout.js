import Head from 'next/head';

export default ({title, children}) => (
  <div>
    <Head>
      <title>{title || 'Money'}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    {children}
  </div>
)
