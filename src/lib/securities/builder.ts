import lookup from "../../../public/data/securities/lookup.json";
import ibmDaily from "../../../public/data/securities/ibm/daily.json";

const SECURITIES_DATA_PATH = "/data/securities";

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
  const security = getSecurityById(id);
  if (!security) return [];
  const path = `${SECURITIES_DATA_PATH}/${security?.symbol.toLowerCase()}/daily.json`;
  const data = require(`../../../public${path}`);
  return extractCloseData(data);
};

export const getSecurityVolumeDataById = (id: number) => {
  const security = getSecurityById(id);
  if (!security) return [];
  const path = `${SECURITIES_DATA_PATH}/${security?.symbol.toLowerCase()}/daily.json`;
  const data = require(`../../../public${path}`);
  return extractVolumeData(data);
};

export const getSecurityDataById = (id: number) => {
  const security = getSecurityById(id);
  if (!security) return [];
  const path = `${SECURITIES_DATA_PATH}/${security?.symbol.toLowerCase()}/daily.json`;
  const data = require(`../../../public${path}`);
  return extractAllData(data);
};

const extractAllData = (data: typeof ibmDaily) => {
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

const extractCloseData = (data: typeof ibmDaily) => {
  const formatted = Object.entries(data["Time Series (Daily)"]).map(
    ([key, value]) => {
      return { time: key, value: Number(value["4. close"]) };
    }
  );

  const timeAscData = formatted.reverse();
  return timeAscData;
};

export const extractVolumeData = (data: typeof ibmDaily) => {
  const formatted = Object.entries(data["Time Series (Daily)"]).map(
    ([key, value]) => {
      return { time: key, value: Number(value["5. volume"]) };
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
  "#F04200",
  "#F09300",
  "#F00040",
  "#F000CF",
  "#DA00F0",
  "#8C00F0",
];
