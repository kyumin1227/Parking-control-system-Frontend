export type ParkingType = {
  status: string;
  car_number?: string;
  parking_time?: string;
  entry_time?: string;
  name?: string;
};

export type ParkingsType = {
  parking: Record<number, ParkingType>;
};

export type MovingDataType = {
  position?: [number, number];
  entry_time?: number;
  car_number: string;
  status?: string;
};

export type DataType = {
  data: { parking: Record<number, ParkingType>; time: number; moving: Record<number, MovingDataType> };
};

export type DataTypeUnpack = {
  parking: Record<number, ParkingType>;
  time: number;
  moving: Record<number, MovingDataType>;
};
