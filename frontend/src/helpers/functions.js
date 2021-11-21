import { toast } from "react-toastify";

export const showError = (err) => {
  const { errors, msg } = err.response.data;

  if (errors) {
    errors.forEach((error) => toast.error(error.msg));
    return;
  }
  if (msg) {
    toast.error(msg);
    return;
  }
};
