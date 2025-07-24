import SkeletonCard from "@/components/SkeletonCard"

export default function Loading() {
    return (
        <main>
            <div className="grid xs:grid-cols-3 3xl:grid-cols-1 gap-4 p-4">
              {"abcdefghi".split('').map(i => (
                <SkeletonCard key={1} />
              ))}
            </div>
        </main>
    )
}