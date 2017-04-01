import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage();
    const styles = flush();
    return { html, head, styles };
  }

  render () {
    const script = `window.ENV = '${process.env.ENV || 'dev'}';`;
    return (
      <html>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"/>
        <script dangerouslySetInnerHTML={{__html: script}}/>
        <style jsx global>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}
