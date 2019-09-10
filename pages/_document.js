import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html>
        <Head>
          <link rel='dns-prefetch' href='//fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com/' crossOrigin='true' />
          <link
            href='https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i|Holtwood+One+SC&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
