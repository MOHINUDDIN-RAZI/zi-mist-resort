import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";

export default function TextArea(props: TextFieldProps) {
  return <TextField fullWidth multiline minRows={4} {...props} />;
}
