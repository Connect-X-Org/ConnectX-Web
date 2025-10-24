"use client";

import { Check, Copy, ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

type MessageFeedbackProps = {
  //   messageId: string;
  //   userMessageId?: string;
  content: string;
  className?: string;
};

export function MessageFeedback({
  //   messageId,
  //   userMessageId,
  content,
  className,
}: MessageFeedbackProps) {
  const [feedback, setFeedback] = useState<"positive" | "negative" | null>(
    null
  );
  const [copied, setCopied] = useState(false);
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);
  const [showSuccessCheckmark, setShowSuccessCheckmark] = useState<
    "positive" | "negative" | null
  >(null);

  const handleFeedback = (type: "positive" | "negative") => {
    if (isSubmittingFeedback || feedback === type) return;

    setIsSubmittingFeedback(true);

    try {
      setFeedback(type);
      setShowSuccessCheckmark(type);

      setTimeout(() => {
        setShowSuccessCheckmark(null);
      }, 1000);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmittingFeedback(false);
    }
  };

  const handleCopy = async () => {
    if (copied) return;

    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      // Silently handle error
    }
  };

  return (
    <div
      className={cn(
        "mt-3 flex items-center gap-1 border-fd-border/30 border-t pt-2",
        className
      )}
    >
      <button
        className={cn(
          buttonVariants({
            size: "icon-sm",
            variant: feedback === "positive" ? "default" : "ghost",
            className: cn(
              "h-7 w-7 transition-colors",
              isSubmittingFeedback && "cursor-not-allowed opacity-50",
              feedback === "positive"
                ? "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50"
                : "hover:bg-fd-accent hover:text-fd-accent-foreground"
            ),
          })
        )}
        disabled={isSubmittingFeedback}
        onClick={() => handleFeedback("positive")}
        title={
          showSuccessCheckmark === "positive"
            ? "Feedback submitted!"
            : "Helpful"
        }
        type="button"
      >
        {showSuccessCheckmark === "positive" ? (
          <Check className="fade-in h-3.5 w-3.5 animate-in text-green-600 duration-200" />
        ) : (
          <ThumbsUp className="h-3.5 w-3.5 transition-all duration-200" />
        )}
      </button>

      <button
        className={cn(
          buttonVariants({
            size: "icon-sm",
            variant: feedback === "negative" ? "default" : "ghost",
            className: cn(
              "h-7 w-7 transition-colors",
              isSubmittingFeedback && "cursor-not-allowed opacity-50",
              feedback === "negative"
                ? "bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50"
                : "hover:bg-fd-accent hover:text-fd-accent-foreground"
            ),
          })
        )}
        disabled={isSubmittingFeedback}
        onClick={() => handleFeedback("negative")}
        title={
          showSuccessCheckmark === "negative"
            ? "Feedback submitted!"
            : "Not helpful"
        }
        type="button"
      >
        {showSuccessCheckmark === "negative" ? (
          <Check className="fade-in h-3.5 w-3.5 animate-in text-green-600 duration-200" />
        ) : (
          <ThumbsDown className="h-3.5 w-3.5 transition-all duration-200" />
        )}
      </button>

      <button
        className={cn(
          buttonVariants({
            size: "icon-sm",
            variant: "ghost",
            className:
              "h-7 w-7 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground",
          })
        )}
        onClick={handleCopy}
        title={copied ? "Copied!" : "Copy message"}
        type="button"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-green-600" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </button>
    </div>
  );
}
