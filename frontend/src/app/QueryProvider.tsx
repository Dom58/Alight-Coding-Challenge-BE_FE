'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const QueryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default QueryProvider;
