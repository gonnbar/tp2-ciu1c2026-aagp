import { HiCheckCircle } from "react-icons/hi2";

type ToastProps = { message: string; };

function Toast({ message }: ToastProps) {
    if (!message) return null;

    return (
        <div
            className={`
                fixed
                top-6
                left-1/2
                -translate-x-1/2
                z-[9999]
                px-6
                py-3
                rounded-full
                bg-primary
                text-sm
                text-white
                shadow-2xl
                font-semibold
                tracking-wide
                border
                border-white/15
                transition-all
                duration-300
            "
            ${message
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-8 opacity-0 pointer-events-none"
                }
            `}
        >
            <div className="flex items-center gap-2">
                <HiCheckCircle className="w-5 h-5" />
                <span>{message}</span>
            </div>
        </div>
    );
}

export default Toast;