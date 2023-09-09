import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../src/components/layout/layout";
import { ReactNode } from "react";

type TMetaData = {
  title: string;
  description: string;
};

export const metadata: TMetaData = {
  title: "NagaNarasimha",
  description: "NagaNarasimha's Portfolio",
};

type TRootLayout = {
  children: ReactNode;
};
const RootLayout: React.FC<TRootLayout> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Layout>
            <>{children}</>
          </Layout>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
