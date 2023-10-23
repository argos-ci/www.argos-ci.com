import "@/styles/highlight-js-github-dark.min.css";
import "@/styles/globals.css";

import PlausibleProvider from "next-plausible";
import { Inter } from "next/font/google";
import { AppNavbar } from "@/containers/AppNavbar";
import { AppFooter } from "@/containers/AppFooter";
import { Metadata } from "next";
import { TooltipProvider } from "@/components/Tooltip";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Argos — Visual Testing for modern web apps",
  description:
    "Enjoy the simplicity of seamlessly review visual changes throughout your development workflow.",
  twitter: {
    site: "@argos_ci",
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <PlausibleProvider domain="argos-ci.com" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-847457408"
        />
        <Script id="google-ads-conversion-tracking">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-847457408');`}
        </Script>
      </head>
      <body>
        <TooltipProvider>
          <div id="content">
            <AppNavbar />
            <main>{children}</main>
            <AppFooter />
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
