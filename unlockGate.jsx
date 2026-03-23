import { Lock, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import TaskCard from "./TaskCard";
import { motion, AnimatePresence } from "framer-motion";

export default function UnlockGate({ tasks, onToggleTask, chapterNumber }) {
  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
  const allDone = completedCount === totalCount && totalCount > 0;

  return (
    <div className="max-w-lg mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-8"
      >
        <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-colors duration-500 ${
          allDone ? 'bg-primary/10' : 'bg-muted'
        }`}>
          {allDone ? (
            <CheckCircle2 className="w-8 h-8 text-primary" />
          ) : (
            <Lock className="w-8 h-8 text-muted-foreground" />
          )}
        </div>
        <h2 className="font-heading text-2xl font-bold mb-2">
          {allDone ? "Chapter Unlocked!" : `Unlock Chapter ${chapterNumber}`}
        </h2>
        <p className="text-muted-foreground text-sm">
          {allDone
            ? "Great work! You can now read this chapter."
            : `Complete ${totalCount - completedCount} more task${totalCount - completedCount !== 1 ? 's' : ''} to continue reading.`
          }
        </p>
      </motion.div>

      <div className="mb-6">
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          <span>Progress</span>
          <span>{completedCount}/{totalCount}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="space-y-3">
        <AnimatePresence>
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} onToggle={onToggleTask} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
