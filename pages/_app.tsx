import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "react-query";
import Sidebar from "@/components/layout/Sidebar";

export default function App({ Component, pageProps }: AppProps) {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const router = useRouter();
  const queryClient = new QueryClient();
  useEffect(() => {
    if (router.pathname == "/signin" || router.pathname == "/signup") {
      setShowSidebar(false);
    }
  }, [router.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Grid
          templateColumns="repeat(6,  1fr)"
          pos="relative"
          w="full"
          h="full"
          gap="0"
        >
          {showSidebar && (
            <GridItem colSpan={1} as="aside">
              <Sidebar />
            </GridItem>
          )}
          <GridItem colSpan={5} w="full" h="full">
            <Component {...pageProps} />
          </GridItem>
        </Grid>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
