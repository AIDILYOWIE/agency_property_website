import { FiCheck } from "react-icons/fi";

export function SuccessMessage() {
    return (<div className="flex-1 flex flex-col items-center justify-center text-center p-8 md:p-12 z-10 min-h-[350px]">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <FiCheck className="text-primary w-8 h-8" />
        </div>
        <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-on-background mb-3">
            Inquiry Submitted
        </h2>
        <p className="text-on-surface-variant text-body-md max-w-sm">
            Your contact details and message have been successfully sent. An exclusive property consultant from our team will reach out to you shortly.
        </p>
    </div>)
}