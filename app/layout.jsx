import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../src/components/layout/layout";

export const metadata = {
  title: "NagaNarasimha",
  description: "NagaNarasimha's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Layout>{children}</Layout>
        </ChakraProvider>
      </body>
    </html>
  );
}
