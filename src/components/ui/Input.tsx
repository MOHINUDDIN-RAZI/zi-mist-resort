import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";
import { colors } from "@/theme";

export default function Input(props: TextFieldProps) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      {...props}
      slotProps={{
        ...props.slotProps,

        formHelperText: {
          sx: {
            color: colors.error,
            marginLeft: 0,
          },
          ...props.slotProps?.formHelperText,
        },
      }}
    />
  );
}
