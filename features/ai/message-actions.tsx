import type { UIDataTypes, UIMessage, UITools } from "ai";
import { toast } from "sonner";
import { useCopyToClipboard } from "usehooks-ts";
import { Action, Actions } from "@/components/ai-elements/actions";
import { CopyIcon, PencilEditIcon, ThumbDownIcon, ThumbUpIcon } from "./icons";
export function MessageActions({
  message,
  isLoading,
  setMode,
}: {
  chatId: string;
  message: UIMessage<unknown, UIDataTypes, UITools>;
  isLoading: boolean;
  setMode?: (mode: "view" | "edit") => void;
}) {
  const [_, copyToClipboard] = useCopyToClipboard();

  if (isLoading) return null;

  const textFromParts = message.parts
    ?.filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("\n")
    .trim();

  const handleCopy = async () => {
    if (!textFromParts) {
      toast.error("There's no text to copy!");
      return;
    }

    await copyToClipboard(textFromParts);
    toast.success("Copied to clipboard!");
  };
  // handle edit with toast saying that editing is soon
  const handleEdit = () => {
    toast("Editing is coming soon!");
  };

  // User messages get edit (on hover) and copy actions
  if (message.role === "user") {
    return (
      <Actions className="-mr-0.5 justify-end">
        <div className="relative">
          {setMode && (
            <Action
              className="-left-10 absolute top-0 opacity-0 transition-opacity group-hover/message:opacity-100"
              // onClick={() => setMode("edit")}
              onClick={handleEdit}
              tooltip="Edit"
            >
              <PencilEditIcon />
            </Action>
          )}
          <Action onClick={handleCopy} tooltip="Copy">
            <CopyIcon />
          </Action>
        </div>
      </Actions>
    );
  }

  return (
    <Actions className="-ml-0.5">
      <Action onClick={handleCopy} tooltip="Copy">
        <CopyIcon />
      </Action>

      <Action data-testid="message-upvote" tooltip="Upvote Response">
        <ThumbUpIcon />
      </Action>

      <Action data-testid="message-downvote" tooltip="Downvote Response">
        <ThumbDownIcon />
      </Action>
    </Actions>
  );
}
