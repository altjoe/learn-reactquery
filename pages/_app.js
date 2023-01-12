import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={client}>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}

export default MyApp;
