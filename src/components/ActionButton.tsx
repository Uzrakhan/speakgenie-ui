interface Props {
    icon: string;
    label: string;
}

export default function ActionButton({ icon, label }: Props) {
    return (
        <div className="flex flex-col items-center mt-10">
            <div className="w-20 h-20 bg-white shadow-lg rounded-full flex items-center justify-center">
                <div className="w-14 h-14 bg-sky-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl">
                        {icon}
                    </span>
                </div>
            </div>
            

            <p className="text-xs mt-1 text-gray-700 text-center">
                {label}
            </p>
        </div>
    )
}