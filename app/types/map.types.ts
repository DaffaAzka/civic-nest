export type Province = {
  code: string;
  name: string;
};

export type Regency = {
  code: string;
  name: string;
  provinceCode: string;
};

export type Distric = {
  code: string;
  name: string;
  regencyCode: string;
};

export type Village = {
  code: string;
  name: string;
  districtCode: string;
};
