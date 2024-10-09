export type ParkingAreaType = {
  status: string;
  car_number?: string;
  parking_time?: string;
};

export type ParkingAreasType = {
  parking: Record<number, ParkingAreaType>;
};

export type MovingDataType = {
  position: [number, number];
  entry_time?: number;
};

export type DataType = {
  data: { parking: Record<number, ParkingAreaType>; time: number; moving: Record<number, MovingDataType> };
};

export type DataTypeUnpack = {
  parking: Record<number, ParkingAreaType>;
  time: number;
  moving: Record<number, MovingDataType>;
};
