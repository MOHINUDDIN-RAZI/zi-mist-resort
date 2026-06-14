import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";

import type { SelectChangeEvent } from "@mui/material";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  value: string;
  options: Option[];
  onChange: (event: SelectChangeEvent) => void;
}

export default function Select({
  label,
  value,
  options,
  onChange,
}: SelectProps) {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>

      <MuiSelect value={value} label={label} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
