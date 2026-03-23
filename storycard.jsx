import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function StoryCard({ story, progress }) {
  const chaptersRead = progress || 0;

  return (
    <Link to={`/story/${story.id}`}>
      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
        <Card className="overflow-hidden group cursor-pointer border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
            {story.cover_url ? (
              <img
                src={story.cover_url}
                alt={story.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-primary/30" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-heading text-white text-lg font-bold leading-tight line-clamp-2">
                {story.title}
              </h3>
              {story.author && (
                <p className="text-white/70 text-sm mt-1">by {story.author}</p>
              )}
            </div>
          </div>
          <div className="p-3 flex items-center justify-between">
            {story.fandom && (
              <Badge variant="secondary" className="text-xs font-body">
                {story.fandom}
              </Badge>
            )}
            <div className="flex items-center gap-1 text-muted-foreground text-xs">
              <Layers className="w-3 h-3" />
              <span>{chaptersRead}/{story.total_chapters || 0}</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}
