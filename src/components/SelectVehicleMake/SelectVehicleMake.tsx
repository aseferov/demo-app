import React, { useEffect, useState } from "react";
import Select from "../Select/Select";
import VehicleMakeService, {
  VehicleMakeEntity,
} from "../../services/VehicleMakeService";

type SelectVehicleMakeProps = {
  onChange: (make?: VehicleMakeEntity) => void;
};

const SelectVehicleMake = ({
  onChange,
  ...props
}: Omit<React.ComponentProps<"select">, "onChange"> &
  SelectVehicleMakeProps): JSX.Element => {
  const [provinces, setProvinces] = useState<VehicleMakeEntity[]>([]);

  useEffect(() => {
    VehicleMakeService.get().then((response) => {
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

export default SelectVehicleMake;
