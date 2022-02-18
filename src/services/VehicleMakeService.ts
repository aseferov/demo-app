export type VehicleMakeEntity = {
  name: string;
  id: number;
};

export default {
  get() {
    const makes: VehicleMakeEntity[] = [
      {
        name: "Nissan",
        id: 1,
      },
      {
        name: "BMW",
        id: 2,
      },
      {
        name: "Ford",
        id: 3,
      },
    ];
    return Promise.resolve(makes);
  },
};
