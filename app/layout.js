
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import Providers from "./Providers";
import stores from "@/stores";
import { ReduxProviders } from "./GlobalRedux/provider";

export const metadata = {
  title: "CVCompser",
  description: "Unlock Your Career Potential - Your Perfect CV Awaits with CVComposer",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="bg-white py-3 sm:py-0 dark:bg-gray-800">
        <ReduxProviders>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </ReduxProviders>
      </body>
    </html>
  );
}