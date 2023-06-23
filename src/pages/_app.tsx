import Layout from "@/components/Layouts/Layout";
import { ThemeProvider } from "@/components/theme-provider";
import { api } from "@/utils/api";
import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
