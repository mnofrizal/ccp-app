import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import BottomNavbar from "@/components/BottomNavbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hai Aya CCP App",
  description: "Hai aya dalam membantu pencapaian CCP",
  manifest: "/manifest.json",
  themeColor: "#000000",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Beyond kWh",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Beyond kWh Revenue",
    title: "Beyond kWh Revenue",
    description: "Beyond kWh Revenue Application",
  },
  twitter: {
    card: "summary",
    title: "Beyond kWh Revenue",
    description: "Beyond kWh Revenue Application",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} flex flex-col min-h-screen bg-background text-foreground safe-area-padding`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="main-content flex-grow">{children}</main>
          <BottomNavbar className="safe-area-bottom" />
        </ThemeProvider>
      </body>
    </html>
  );
}
