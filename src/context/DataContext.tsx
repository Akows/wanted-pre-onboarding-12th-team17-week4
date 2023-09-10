import { createContext, useContext, ReactNode } from 'react';
import { DataFetchService } from '../api/DataFetchService';

interface DataContextType {
  fetchData: () => Promise<any[]>;
}

const DataContext = createContext<DataContextType | null>(null);
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
  dataFetchService: DataFetchService;
}

export function DataProvider({
  children,
  dataFetchService,
}: DataProviderProps) {
  const fetchData = dataFetchService.fetchData.bind(dataFetchService);

  return (
    <DataContext.Provider value={{ fetchData }}>
      {children}
    </DataContext.Provider>
  );
}
