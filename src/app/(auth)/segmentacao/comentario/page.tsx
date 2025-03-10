'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const initialComments = [
  {
    id: 1,
    name: "Carlos",
    surname: "Pereira",
    date: "2024-10-24",
    time: "16:30",
    comment: "Esse cliente foi bem atendido.",
    avatar: "/path-to-avatar1.jpg",
  },
  {
    id: 1,
    name: "Carlos",
    surname: "Pereira",
    date: "2024-10-24",
    time: "16:30",
    comment: "Esse cliente foi bem atendido.",
    avatar: "/path-to-avatar1.jpg",
  },
  {
    id: 1,
    name: "Carlos",
    surname: "Pereira",
    date: "2024-10-24",
    time: "16:30",
    comment: "Esse cliente foi bem atendido.",
    avatar: "/path-to-avatar1.jpg",
  },
  {
    id: 1,
    name: "Carlos",
    surname: "Pereira",
    date: "2024-10-24",
    time: "16:30",
    comment: "Esse cliente foi bem atendido.",
    avatar: "/path-to-avatar1.jpg",
  },
  {
    id: 1,
    name: "Carlos",
    surname: "Pereira",
    date: "2024-10-24",
    time: "16:30",
    comment: "Esse cliente foi bem atendido.",
    avatar: "/path-to-avatar1.jpg",
  },
  {
    id: 2,
    name: "Ana",
    surname: "Souza",
    date: "2024-10-23",
    time: "14:45",
    comment: "Tudo certo com o atendimento!",
    avatar: "/path-to-avatar2.jpg",
  }
];

export default function Comentario({ id }: { id: string }) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    if (newComment.trim() === "") return;

    const newCommentEntry = {
      id: comments.length + 1,
      name: "Funcionário",
      surname: "Sobrenome",
      date: new Date().toISOString().split("T")[0],
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      comment: newComment,
      avatar: "/path-to-avatar.jpg",
    };

    setComments([...comments, newCommentEntry]);
    setNewComment("");
  };

  return (
    <div className="flex flex-grow flex-col">
      
      <div>Cliente {id}</div>


      <div className="flex flex-grow overflow-y-auto flex-col p-4 space-y-4 basis-0 custom-scrollbar">
        {comments.map((comment) => (
          <Card key={comment.id} className="p-4 rounded-lg shadow flex space-x-4">
            <Avatar>
              <AvatarImage src={comment.avatar} />
              <AvatarFallback>{comment.name[0] + comment.surname[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900 dark:text-gray-100">{comment.name} {comment.surname}</span>
                <span className="text-sm text-gray-500">{comment.date} às {comment.time}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-1">{comment.comment}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="p-4 w-full  flex items-center space-x-2 border-t border-gray-300 dark:border-gray-700">
        <Input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escreva um comentário"
          className="flex-1"
        />
        <Button onClick={handleCommentSubmit} className="flex items-center">
          <Send className="mr-2 h-4 w-4" /> Enviar
        </Button>
      </div>
    </div>
  );
}

