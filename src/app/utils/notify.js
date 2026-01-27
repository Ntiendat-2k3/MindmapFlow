import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (status, content, click = null, method = null) => {
    if (!click) {
        return toast[status](`${content}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    else {
        return toast[status](`${content}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            onClick: method
        });
    }
}

export default notify