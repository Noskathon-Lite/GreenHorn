import { createContext, useContext, useEffect, useState } from "react"

const DataContext = createContext();

const BASE_URL = 'http://localhost:8000';

function GraphDataProvider({children}) {
  const [graphData, setGraphData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    async function fetchData(){
      setIsLoading(true);
      try{
        const res = await fetch(`${BASE_URL}/graphData`);
        const data = await res.json();
        setGraphData(data);
        // console.log(data);
      }catch(err){
        console.Error(err.message);
      }finally{
        setIsLoading(false);
      }
      
    }

    fetchData();
  },[]);

  return (
    <DataContext.Provider value={{
      graphData,
      isLoading
    }}>
      {children}
    </DataContext.Provider>
  )
}

function useData(){
  const context = useContext(DataContext);
  if( context === undefined) throw new Error('Data Context was used outside DataProvider.');
  return context;
}

export {GraphDataProvider, useData};