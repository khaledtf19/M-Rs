import Layout from "@/components/Layouts/Layout";
import { api } from "@/utils/api";
import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
