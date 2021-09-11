import React from "react"
import Error from "next/error"
import { isLocale } from "../translations/locale-utils"
import { LocaleProvider } from "../context/LocaleContext"

export default WrappedPage => {
  const WithLocale = ({ locale, ...pageProps }) => {
    if (!locale) {
      return <Error statusCode={404} />
    }

    return (
      <LocaleProvider lang={locale}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    )
  }

  WithLocale.getInitialProps = async ctx => {
    let pageProps = {}

    if (WrappedPage.getInitialProps) {
      pageProps = await WrappedPage.getInitialProps(ctx)
    }

    if (typeof ctx.query.lang !== "string" || !isLocale(ctx.query.lang)) {
      return { ...pageProps, locale: undefined }
    }

    return { ...pageProps, locale: ctx.query.lang }
  }



  return WithLocale
}
