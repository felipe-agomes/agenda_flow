import "./InputTaskForm.css";
import { useFormContext } from "react-hook-form";

type InputTaskFormProp = {
  name: string;
  label: string;
  placeholder?: string;
};

export default function InputTaskForm({
  name,
  label,
  placeholder,
}: InputTaskFormProp) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="input_box">
      <label>{label}</label>
      <input
        {...register(name)}
        placeholder={placeholder}
      ></input>
      {errors[name] && <p style={{ color: "red" }}>{errors[name].message?.toString()}</p>}
    </div>
  );
}
