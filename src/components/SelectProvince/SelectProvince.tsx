import React, { useEffect, useState } from "react";
import ProvinceService, {
  ProvinceEntity,
} from "../../services/ProvinceService";
import Select from "../Select/Select";

type SelectProvinceProps = {
  onChange: (province?: ProvinceEntity) => void;
};

const SelectProvince = ({
  onChange,
  ...props
}: Omit<React.ComponentProps<"select">, "onChange"> &
  SelectProvinceProps): JSX.Element => {
  const [provinces, setProvinces] = useState<ProvinceEntity[]>([]);

  useEffect(() => {
    ProvinceService.get().then((response) => {
      setProvinces(response);
    });
  }, []);

  return (
    <Select
      {...props}
      onChange={(e) => {
        const id = parseInt(e.target.value);
        onChange(provinces.find((p) => p.id === id));
      }}
    >
      <option />
      {provinces.map((province, index) => (
        <option key={index} value={province.id}>
          {province.name}
        </option>
      ))}
    </Select>
  );
};

export default SelectProvince;
