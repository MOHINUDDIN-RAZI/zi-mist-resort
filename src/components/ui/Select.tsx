import { colors } from "@/theme";
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
  error?: boolean;
  helperText?: string;
}

export default function Select({
  label,
  value,
  options,
  onChange,
  error,
  helperText,
}: SelectProps) {
  return (
    <FormControl fullWidth error={error}>
      <InputLabel>{label}</InputLabel>

      <MuiSelect value={value} label={label} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && (
        <p className="mt-1 text-sm" style={{ color: colors.error }}>
          {helperText}
        </p>
      )}
    </FormControl>
  );
}
