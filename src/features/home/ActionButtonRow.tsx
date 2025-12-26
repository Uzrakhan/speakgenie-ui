import ActionButton from "../../components/ActionButton";

const actions = [
    { icon: "🎥", label: "Video Learning" },
    { icon: "📞", label: "Peer Calls" },
    { icon: "📚", label: "Stories" },
    { icon: "🤖", label: "AI Calls" },
];


export default function ActionButtonRow() {
    return (
        <div className="grid grid-cols-4 gap-3 px-4 -mt-6">
            {actions.map((a) => (
                <ActionButton key={a.label} {...a} />
            ))}
        </div>
    )
}