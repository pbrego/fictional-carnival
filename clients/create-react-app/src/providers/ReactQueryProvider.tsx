import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: { refetchOnWindowFocus: false },
    },
});

export const ReactQueryProvider: FC = (props) => <QueryClientProvider client={queryClient} {...props} />;
