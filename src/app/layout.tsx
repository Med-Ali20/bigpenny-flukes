import AppContextProvider from "@/components/appContextProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Image from "next/image";
import BookNowElliptic from "@/components/book-now-elliptic";
import Footer from "@/sections/footer";
import MobileHeader from "@/components/MobileHeader";
import CookieBanner from "@/components/cookies";
import GTMHead from "@/components/ssGTM";
import BookNowRectangular from "@/components/book-now-rectaungular";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/flukes?populate[header][populate]=*&populate[footer][populate]=logo&populate[footer][populate]=links&populate[book][populate]=DMN&populate[book][populate]=games&populate[book][populate]=notices`,
    {
      cache: "force-cache",
    }
  );
  const { data } = await res.json();
  const header = data.attributes.header;

  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Flukes At Big Penny Social</title>

        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T5RMKTD');
          `}
        </Script>
        <GTMHead />
      </head>
      <body className="antialiased relative bg-secondary text-primary">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KXCJGTMJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <header className="flex py-[17px] px-[24px] md:py-[24px] md:px-[60px] text-primary border-b-[1rem] border-primary w-full items-center uppercase !sticky top-0 bg-[#ebe9db] z-50" style={{position: 'sticky'}}>
          {/* Mobile Navigation */}

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:block text-lg font-semibold">
            <ul>
              <li>
                {header.navigation.map((el: any) => (
                  <a
                    key={el.id}
                    href={el.url}
                    className={`${
                      el.id === 1 && "mr-4 lg:mr-[80px]"
                    } font-['Salford_Sans'] lg:text-[24px] min-[1400px]:text-[30px]`}
                  >
                    {el.name}
                  </a>
                ))}
              </li>
            </ul>
          </nav> */}

          {/* Logo */}
          <a href="/flukes/" className="mr-auto lg:hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${header.logo.data.attributes.url}`}
              alt="Logo"
              width={180}
              height={38}
            />
          </a>
          <a
            href="/flukes/"
            className="mr-auto hidden lg:block my-[5px]"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${header.logo.data.attributes.url}`}
              alt="Logo"
              // width={320}
              // height={62}
              className="lg:w-[22rem] 2xl:-[30rem]"
            />
          </a>

          {/* Book Now Button */}
          <BookNowRectangular className="hidden lg:block font-['Salford_Sans'] lg:text-[34px] py-[10px]" />
          <MobileHeader headerData={header} />

        </header>
        <AppContextProvider value={data.attributes.book}>
          {children}
        </AppContextProvider>

        <Footer data={data.attributes.footer} />
        <CookieBanner />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T5RMKTD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}
