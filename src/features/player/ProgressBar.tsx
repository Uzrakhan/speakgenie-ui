export default function ProgressBar() {
    return (
        <div className="px-6 mt-4">

            <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>0:00</span>
                <span>2:21</span>
            </div>

            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-2 bg-emerald-500 w-1/4" />
            </div>
        </div>
    )
}