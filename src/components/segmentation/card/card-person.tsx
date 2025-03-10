import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Search, CheckCheck, Unlock } from "lucide-react";

export interface CardPersonProps {
    card: {
        id: number;
        client: string;
        evaluator: string;
        time: string;
        approved: boolean;
    };
    handleCardClick: (id: number) => void;
    isCardSelected: (id: number) => boolean;
}

export default function CardPerson({ card, handleCardClick, isCardSelected }: CardPersonProps) {

    const getInitials = (name: string) => {
        const nameParts = name.split(' ');
        const initials = nameParts[0][0] + (nameParts[1] ? nameParts[1][0] : '');
        return initials.toUpperCase();
    };


    return (
        <Card
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`w-full h-2'0 flex items-center p-2 gap-2 border-2 cursor-pointer ${isCardSelected(card.id)
                ? card.approved
                    ? 'border-l-green-500 bg-slate-100 dark:bg-gray-900'
                    : 'border-l-zinc-700 bg-slate-100 dark:bg-gray-900'
                : card.approved
                    ? 'border-l-green-500'
                    : 'border-l-zinc-700'
                }`}
        >
            <Avatar>
                <AvatarImage src="#" />
                <AvatarFallback className="bg-black text-white">
                    {getInitials(card.client)}
                </AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <CardTitle className="font-size text-sm">{card.client}</CardTitle>
                <CardDescription>{card.evaluator}</CardDescription>
            </div>
            <div className="w-10 flex flex-col justify-center items-end">
                <CardTitle className="text-xs">{card.time}</CardTitle>
                {card.approved && (
                    <CheckCheck size={20} className="text-green-500" />
                )}
            </div>
        </Card>
    )
}