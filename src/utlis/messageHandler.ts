import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  message: string;
  type: "success" | "error";
}

export const messageHandler = ({ type, message }: Props) => {
    toast[type](message, {
        position: "bottom-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
};
