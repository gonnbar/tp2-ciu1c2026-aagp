type ToastProps = {
    message: string;
};

function Toast({ message }: ToastProps) {
    if (!message) return null;

    return (
        <div
            className="
                fixed
                top-5
                left-1/2
                -translate-x-1/2
                bg-zinc-900
                text-white
                px-5
                py-3
                rounded-full
                shadow-xl
                text-sm
                font-medium
                z-[999]
            "
        >
            ✓ {message}
        </div>
    );
}

export default Toast;