import type { ElectricityData } from "@/types/electricityData";

export const electricityDataById = {
  vombverket: {
    id: "vombverket",
    name: "Vombverket",
    description: "Vombverket är en vattenreningsanläggning i Skåne.",
    averageConsumption: 1158.76,
     
    lasthoursOfConsumption: {
      "00:00:00": 1712.4, 
      "01:00:00": 1708.56,
      "02:00:00": 1642.8,
      "03:00:00": 1529.76,
      "04:00:00": 1512,
      "05:00:00": 1427.52,
      "06:00:00": 1413.36,
      "07:00:00": 1307.76,
      "08:00:00": 1043.04,
      "09:00:00": 232.56,
      "10:00:00": 327.6,
      "11:00:00": 347.04,
      "12:00:00": 77.04,
      "13:00:00": 487.2,
      "14:00:00": 237.36,
      "15:00:00": 132,
      "16:00:00": 584.16,
      "17:00:00": 781.44,
      "18:00:00": 1471.44,
      "19:00:00": 1812.48,
      "20:00:00": 2045.04,
      "21:00:00": 2127.6,
      "22:00:00": 2020.8,
      "23:00:00": 1829.28,}
  },
  ringsjoverket: {
    id: "ringsjoverket",
    name: "Ringsjöverket",
    description: "Ringsjöverket är en vattenreningsanläggning i Skåne.",
    averageConsumption: 420.58,
    
    lasthoursOfConsumption: {
      "00:00:00": 378,
      "01:00:00": 322,
      "02:00:00": 306,
      "03:00:00": 352,
      "04:00:00": 334,
      "05:00:00": 334,
      "06:00:00": 410,
      "07:00:00": 504,
      "08:00:00": 482,
      "09:00:00": 488,
      "10:00:00": 494,
      "11:00:00": 468,
      "12:00:00": 474,
      "13:00:00": 446,
      "14:00:00": 428,
      "15:00:00": 440,
      "16:00:00": 452,
      "17:00:00": 444,
      "18:00:00": 480,
      "19:00:00": 472,
      "20:00:00": 432,
      "21:00:00": 430,
      "22:00:00": 382,
      "23:00:00": 350,}
  },
    ringsjoholmPump: {
    id: "ringsjoholmPump",
    name: "Ringsjöholms Pump",
    description: "Ringsjöholm pumpstation ligger före Ringsjöverket i Skåne.",
    averageConsumption: 545.14,
    
    lasthoursOfConsumption: {
      "00:00:00": 528.48,
      "01:00:00": 534,
      "02:00:00": 538.92,
      "03:00:00": 541.92,
      "04:00:00": 542.16,
      "05:00:00": 542.52,
      "06:00:00": 541.2,
      "07:00:00": 540.24,
      "08:00:00": 540.72,
      "09:00:00": 540.48,
      "10:00:00": 541.08,
      "11:00:00": 541.08,
      "12:00:00": 540,
      "13:00:00": 539.28,
      "14:00:00": 544.92,
      "15:00:00": 544.44,
      "16:00:00": 544.2,
      "17:00:00": 543.96,
      "18:00:00": 545.04,
      "19:00:00": 544.44,
      "20:00:00": 548.28,
      "21:00:00": 548.28,
      "22:00:00": 585.48,
      "23:00:00": 582.24,}
  },
  
} satisfies Record<string, ElectricityData>;

export type ElectricityId = keyof typeof electricityDataById;
export const electricityDataList: ElectricityData[] = Object.values(electricityDataById);