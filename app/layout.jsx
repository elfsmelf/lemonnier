import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GADS_CONVERSION_ID } from "@/lib/gtag";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Lemonnier Landscapes — Perth's High-End Landscape Designers",
  description:
    "Considered gardens from concept to handover. Free on-site consult. Fixed-price quotes. 15 years experience across Perth's western suburbs.",
  metadataBase: new URL("https://lemonnier-landscapes.example.com"),
  openGraph: {
    title: "Lemonnier Landscapes — Perth's High-End Landscape Designers",
    description:
      "Considered gardens from concept to handover. Free on-site consult. Fixed-price quotes.",
    type: "website",
    locale: "en_AU",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3efe6",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-palette="forest"
      data-display-font="fraunces"
      data-mode="light"
      className={`${fraunces.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        {/* Google tag (gtag.js) — Google Ads conversion tracking */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GADS_CONVERSION_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GADS_CONVERSION_ID}');
          `}
        </Script>
        {/* Nimbata dynamic number insertion + call tracking */}
        <Script
          src="https://cdn.dni.nimbata.com/56902091997.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
