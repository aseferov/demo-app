export type ProvinceEntity = {
  name: string;
  id: number;
};

export default {
  get() {
    const provinces: ProvinceEntity[] = [
      {
        name: "Ontario",
        id: 1,
      },
      {
        name: "British Columbia",
        id: 2,
      },
      {
        name: "Quebec",
        id: 3,
      },
    ];
    return Promise.resolve(provinces);
  },
};
