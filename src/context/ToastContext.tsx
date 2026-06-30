import {
    createContext,
    useContext,
    useState
} from "react";
import Toast from "../components/Toast/Toast";

type ToastContextType = {
    showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [message, setMessage] = useState("");

    const showToast = (message: string) => {
        setMessage(message);

        setTimeout(() => {
            setMessage("");
        }, 3000);
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <Toast message={message} />
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error("useToast debe usarse dentro de ToastProvider");
    }

    return context;
}