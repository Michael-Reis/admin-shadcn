import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CardSkeleton() {
    return (
        <Card className="w-full h-20 flex items-center p-2 gap-2 border-l-lime-500 border-2">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div className="flex-1">
                <Skeleton className="h-5 w-32 mb-2" />
                <Skeleton className="h-4 w-40" />
            </div>
            <Skeleton className="w-10 h-4" />
        </Card>
    )
}