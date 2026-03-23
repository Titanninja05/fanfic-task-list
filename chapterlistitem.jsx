import { Lock, Unlock, CheckCircle2, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function ChapterListItem({ chapter, isUnlocked, isCurrent, tasksForChapter, onClick }) {
  const allTasksDone = tasksForChapter?.length > 0 && tasksForChapter.every(t => t.completed);
  const isFirstChapter = chapter.chapter_number === 1;
  const canRead = isFirstChapter || isUnlocked;

  return (
    <motion.button
      onClick={() => canRead && onClick(chapter)}
      disabled={!canRead}
      className={cn(
        "w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center gap-4 group",
        canRead
          ? "hover:bg-primary/5 cursor-pointer"
          : "opacity-60 cursor-not-allowed",
        isCurrent && "bg-primary/10 ring-1 ring-primary/20"
      )}
      whileHover={canRead ? { x: 4 } : {}}
    >
      <div
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors",
          canRead
            ? "bg-primary/10 text-primary"
            : "bg-muted text-muted-foreground"
        )}
      >
        {allTasksDone || isFirstChapter ? (
          isFirstChapter && !allTasksDone ? (
            <Unlock className="w-4 h-4" />
          ) : (
            <CheckCircle2 className="w-4 h-4" />
          )
        ) : canRead ? (
          <Unlock className="w-4 h-4" />
        ) : (
          <Lock className="w-4 h-4" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm text-muted-foreground">Chapter {chapter.chapter_number}</p>
        <p className={cn(
          "font-medium truncate",
          canRead ? "text-foreground" : "text-muted-foreground"
        )}>
          {chapter.title}
        </p>
        {!canRead && tasksForChapter && tasksForChapter.length > 0 && (
          <p className="text-xs text-muted-foreground mt-1">
            {tasksForChapter.filter(t => t.completed).length}/{tasksForChapter.length} tasks done
          </p>
        )}
      </div>

      {canRead && (
        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
      )}
    </motion.button>
  );
}
