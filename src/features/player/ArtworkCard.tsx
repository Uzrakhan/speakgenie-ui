interface ArtworkCardProps {
    image: string;
}

export default function ArtworkCard({ image }: ArtworkCardProps) {
    return (
        <div className="p-4  bg-gradient-to-b from-emerald-100 to-white mt-2">
            <div className="bg-white rounded-3xl p-3 shadow-lg border-2 border-emerald-400">
                <img 
                    src={image}
                    loading="eager"
                    className="rounded-3xl w-full h-[300px] object-cover"
                />
            </div>
        </div>
    )
}