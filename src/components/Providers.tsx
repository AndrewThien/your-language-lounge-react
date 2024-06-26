'use client';

import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();
// eslint-disable-next-line react-memo/require-memo
const Providers = ({children}: Props) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default Providers;
