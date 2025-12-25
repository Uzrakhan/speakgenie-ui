interface SectionTitleProps {
  title: string;
  icon?: React.ReactNode;
}

export default function SectionTitle({ title, icon }: SectionTitleProps) {

    return (
        <div className="flex items-center justify-between mt-6 px-4">
            <div className="flex items-center gap-2">
                {icon && (
                    <div className="w-6 h-6 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center">
                        {icon}
                    </div>
                )}
                <h2 className="font-semibold text-gray-800">
                    {title}
                </h2>
            </div>
            <button className="text-sm text-emerald-600">
                Show all →
            </button>
        </div>
    )
}