import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function TaskCard({ task, onToggle }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "p-4 rounded-xl border transition-all duration-300",
        task.completed
          ? "bg-primary/5 border-primary/20"
          : "bg-card border-border hover:border-primary/30"
      )}
    >
      <div className="flex items-start gap-3">
        <Checkbox
          checked={task.completed}
          onCheckedChange={() => onToggle(task)}
          className="mt-0.5"
        />
        <div className="flex-1">
          <p className={cn(
            "font-medium text-sm transition-all",
            task.completed && "line-through text-muted-foreground"
          )}>
            {task.title}
          </p>
          {task.description && (
            <p className="text-xs text-muted-foreground mt-1">{task.description}</p>
          )}
        </div>
        {task.completed && (
          <Sparkles className="w-4 h-4 text-accent shrink-0" />
        )}
      </div>
    </motion.div>
  );
}
