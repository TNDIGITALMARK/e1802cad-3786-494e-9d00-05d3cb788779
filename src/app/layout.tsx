import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";
import { ZyloProvider } from "@/lib/zylo/provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Studio Atelier - Betaalbare Mode voor het Hele Gezin",
  description: "Ontdek stijlvolle en betaalbare kleding voor dames, heren en kinderen. Trendy mode tegen de beste prijzen met gratis verzending vanaf €50.",
  keywords: "kleding, mode, dames, heren, kinderen, fashion, betaalbaar, online shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head />
      <body className="antialiased flex flex-col min-h-screen">
        <QueryProvider>
          <ZyloProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <TooltipProvider>
                <Header />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
                <Toaster />
                <Sonner />
              </TooltipProvider>
            </ThemeProvider>
          </ZyloProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
