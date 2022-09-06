import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import ExpenseEntryItemList from './components/ExpenseEntryItemList';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ExpenseEntryItemList />
  </StrictMode>
);
