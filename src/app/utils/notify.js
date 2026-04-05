import { toast } from 'sonner';

const notify = (status, content, click = null, method = null) => {
    // Map react-toastify 'warn' to sonner 'warning'
    const toastStatus = status === 'warn' ? 'warning' : status;
    const toastFn = toast[toastStatus] || toast;

    // Clear previous toasts to prevent overlapping UI issues
    toast.dismiss();

    if (click && method) {
        return toastFn(`${content}`, {
            action: {
                label: 'Thực hiện',
                onClick: method
            },
            duration: 8000 // Give user more time to click action
        });
    } else {
        return toastFn(`${content}`);
    }
}

export default notify