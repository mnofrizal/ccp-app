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
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} flex flex-col min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-grow">{children}</main>
          <BottomNavbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
