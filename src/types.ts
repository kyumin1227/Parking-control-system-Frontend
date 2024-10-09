export type ParkingAreaType = {
  status: string;
  car_number?: string;
  parking_time?: string;
};

export type ParkingAreasType = {
  parking: Record<number, ParkingAreaType>;
};

export type DataType = {
  data: { parking: Record<number, ParkingAreaType>; time: number };
};
