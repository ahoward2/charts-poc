import lookup from "../../../public/data/securities/lookup.json";
import ibmDaily from "../../../public/data/securities/ibm/daily.json";
import msftDaily from "../../../public/data/securities/msft/daily.json";

export const getAllSecuritiesData = () => {
  return lookup;
};

export const getSecurityByName = (name: string) => {
  return lookup.find((security) => security.name === name);
};

export const getSecurityById = (id: number) => {
  return lookup.find((security) => security.id === id);
};

export const getSecurityCloseDataById = (id: number) => {
  if (id === 1) {
    return extractCloseData(ibmDaily);
  } else {
    return extractCloseData(msftDaily);
  }
};

export const getSecurityDataById = (id: number) => {
  if (id === 1) {
    return extractAllData(ibmDaily);
  } else {
    return extractAllData(msftDaily);
  }
};

const extractAllData = (data: typeof ibmDaily | typeof msftDaily) => {
  const formatted = Object.entries(data["Time Series (Daily)"]).map(
    ([key, value]) => {
      return {
        time: key,
        open: Number(value["1. open"]),
        high: Number(value["2. high"]),
        low: Number(value["3. low"]),
        close: Number(value["4. close"]),
      };
    }
  );

  return formatted;
};

const extractCloseData = (data: typeof ibmDaily | typeof msftDaily) => {
  const formatted = Object.entries(data["Time Series (Daily)"]).map(
    ([key, value]) => {
      return { time: key, value: Number(value["4. close"]) };
    }
  );

  const timeAscData = formatted.reverse();
  return timeAscData;
};

export const lineColors = [
  "#0070E0",
  "#00E0C1",
  "#00B7E0",
  "#00E075",
  "#002AE5",
];
