import { createContext, useContext, useEffect } from "react";

const CarbonContext = createContext();

const apiKey = "ZJZcPFoM7bsvUJAmLxLXw";
const endpoint = "https://www.carboninterface.com/api/v1/estimates";

function CarbonCalcProvider({children}) {
  useEffect(() => {
      async function fetchCarbon() {
        try {
          const res = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type: "electricity",
                electricity_value: 100,
                country: 'CA'
            })
        });

        const data = await res.json();
        console.log(data);
      }
     catch (err) {
      throw new Error(err.message);
    }   
  }
  fetchCarbon()}, []);

  return (
    <CarbonContext.Provider value={{
      
    }}>
      {children}
    </CarbonContext.Provider>
  );
}

function useCarbonCalc(){
  const context = useContext(CarbonContext);
  if(context === undefined) throw new Error('You used carbon context outside its range');
  return context;
}

export {CarbonCalcProvider, useCarbonCalc};