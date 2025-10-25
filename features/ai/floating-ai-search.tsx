/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
/** biome-ignore-all lint/style/noNonNullAssertion: <explanation> */
/** biome-ignore-all lint/complexity/noVoid: <explanation> */
/** biome-ignore-all lint/complexity/noExcessiveCognitiveComplexity: <explanation> */
/** biome-ignore-all lint/a11y/noNoninteractiveElementInteractions: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
"use client";

import { type UIMessage, type UseChatHelpers, useChat } from "@ai-sdk/react";
import { Presence } from "@radix-ui/react-presence";
import { DefaultChatTransport } from "ai";
import {
  InfoIcon,
  Loader2,
  MaximizeIcon,
  SearchIcon,
  Send,
  Trash2,
  X,
} from "lucide-react";
import Link from "next/link";
import {
  type ComponentProps,
  createContext,
  type SyntheticEvent,
  use,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { RemoveScroll } from "react-remove-scroll";
import { MessageContent } from "@/components/ai-elements/message";
import { Response } from "@/components/ai-elements/response";
// import Link from "fumadocs-core/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn, sanitizeText } from "@/lib/utils";
// import type { ProvideLinksToolSchema } from "@/lib/chat/inkeep-qa-schema";
// import { Markdown } from "./markdown";
import { MessageFeedback } from "./message-feedback";

const Context = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
  chat: UseChatHelpers<UIMessage>;
} | null>(null);

function useChatContext() {
  return use(Context)!.chat;
}

const suggestions = [
  "Find the first ten places I can visit in the country",
  "Book my hotel room",
  "Show popular restaurants nearby",
  "Find local guided tours",
  "Check the weather forecast",
  "Get a taxi or ride-hailing service",
  "Find local events and festivals",
];

function SearchAIInput(props: ComponentProps<"form"> & { ismobile?: boolean }) {
  const { status, sendMessage, stop, messages, setMessages } = useChatContext();
  const [input, setInput] = useState("");
  const isLoading = status === "streaming" || status === "submitted";
  const showSuggestions = messages.length === 0 && !isLoading;

  const onStart = (e?: SyntheticEvent) => {
    e?.preventDefault();
    void sendMessage({ text: input });
    setInput("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    void sendMessage({ text: suggestion });
  };

  const handleClear = () => {
    setMessages([]);
    setInput("");
  };

  useEffect(() => {
    if (isLoading) document.getElementById("nd-ai-input")?.focus();
  }, [isLoading]);

  return (
    <div
      className={cn(
        "relative m-[1px] flex flex-col rounded-lg border border-fd-border bg-fd-background shadow-2xl shadow-fd-background",
        isLoading ? "opacity-50" : ""
      )}
    >
      <form
        {...props}
        className={cn("flex items-start pe-2", props.className)}
        onSubmit={onStart}
      >
        <Input
          autoFocus
          className={cn("p-4", "sm:text-sm")}
          disabled={status === "streaming" || status === "submitted"}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(event) => {
            if (!event.shiftKey && event.key === "Enter") {
              onStart(event);
            }
          }}
          placeholder={isLoading ? "answering..." : "Ask CX Assistant"}
          value={input}
        />
        {isLoading ? (
          <button
            className={cn(
              buttonVariants({
                variant: "secondary",
                className: "mt-2 gap-2 rounded-full transition-all",
              })
            )}
            key="bn"
            onClick={stop}
            type="button"
          >
            <Loader2 className="size-4 animate-spin text-fd-muted-foreground" />
          </button>
        ) : (
          <button
            className={cn(
              buttonVariants({
                variant: "secondary",
                className: "mt-2 rounded-full transition-all",
              })
            )}
            disabled={input.length === 0}
            key="bn"
            type="submit"
          >
            <Send className="size-4" />
          </button>
        )}
      </form>

      {showSuggestions && (
        <div className={cn("mt-3", props.ismobile ? "px-3" : "px-4")}>
          <p className="mb-2 font-medium text-fd-muted-foreground text-xs">
            Try asking:
          </p>
          <div
            className={cn(
              "flex gap-2",
              props.ismobile
                ? "-mx-3 overflow-x-auto px-3 pb-2 [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_1rem,black_calc(100%-1rem),transparent_100%)] [mask-image:linear-gradient(to_right,transparent_0%,black_1rem,black_calc(100%-1rem),transparent_100%)]"
                : "flex-wrap"
            )}
          >
            {suggestions.slice(0, 4).map((suggestion, i) => (
              <button
                className={cn(
                  "rounded-full border border-fd-border/50 bg-fd-muted/30 text-left text-fd-muted-foreground transition-all duration-200 hover:border-fd-border hover:bg-fd-muted/50 hover:text-fd-foreground",
                  props.ismobile
                    ? "flex-shrink-0 whitespace-nowrap px-2.5 py-1 text-xs"
                    : "px-3 py-1.5 text-xs"
                )}
                key={i}
                onClick={() => handleSuggestionClick(suggestion)}
                type="button"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
      {showSuggestions && (
        <div className="relative mt-2 flex items-center gap-1 border-t bg-fd-accent/40 px-4 py-2 text-fd-muted-foreground text-xs">
          <div className="flex flex-1 items-center gap-1">
            Powered by{" "}
            <Link
              className="text-fd-primary hover:text-fd-primary/80 hover:underline"
              href="https://rathon-rw.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Rathon
            </Link>
            <span className="hidden sm:inline">
              AI can be inaccurate, please verify the information.
            </span>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <button
                aria-label="Show information"
                className="rounded transition-colors hover:bg-fd-accent/50 sm:hidden"
                type="button"
              >
                <InfoIcon className="size-3.5" />
              </button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="w-auto max-w-44 text-pretty p-2 text-xs"
              side="top"
            >
              AI can be inaccurate, please verify the information.
            </PopoverContent>
          </Popover>
        </div>
      )}
      {!showSuggestions && (
        <div className="mt-2 flex cursor-pointer items-center gap-1 border-t bg-fd-accent/40 px-4 py-2 text-fd-muted-foreground text-xs">
          <button
            aria-disabled={isLoading}
            className="flex items-center gap-1 transition-all duration-200 empty:hidden hover:text-fd-foreground aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
            onClick={() => {
              if (!isLoading) {
                handleClear();
              }
            }}
            tabIndex={0}
            type="button"
          >
            <Trash2 className="size-3" />
            <p>Clear</p>
          </button>
        </div>
      )}
    </div>
  );
}

function List(
  props: Omit<ComponentProps<"div">, "dir"> & { messageCount: number }
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isUserScrollingRef = useRef(false);
  const prevMessageCountRef = useRef(props.messageCount);

  // Scroll to bottom when new message is submitted
  useEffect(() => {
    if (props.messageCount > prevMessageCountRef.current) {
      // New message submitted, reset scroll lock and scroll to bottom
      isUserScrollingRef.current = false;
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: containerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }
    prevMessageCountRef.current = props.messageCount;
  }, [props.messageCount]);

  useEffect(() => {
    if (!containerRef.current) return;
    function callback() {
      const container = containerRef.current;
      if (!container) return;

      // Only auto-scroll if user hasn't manually scrolled up
      if (!isUserScrollingRef.current) {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: "instant",
        });
      }
    }

    const observer = new ResizeObserver(callback);
    callback();

    const element = containerRef.current?.firstElementChild;

    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Track when user manually scrolls
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 50;

      // If user is near bottom, enable auto-scroll, otherwise disable it
      isUserScrollingRef.current = !isNearBottom;
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      {...props}
      className={cn(
        "fd-scroll-container flex min-w-0 flex-col overflow-y-auto",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

function Input(props: ComponentProps<"textarea">) {
  const ref = useRef<HTMLDivElement>(null);
  const shared = cn("col-start-1 row-start-1", props.className);

  return (
    <div className="grid flex-1">
      <textarea
        id="nd-ai-input"
        {...props}
        className={cn(
          "resize-none bg-transparent placeholder:text-fd-muted-foreground focus-visible:outline-none",
          shared
        )}
      />
      <div className={cn(shared, "invisible break-all")} ref={ref}>
        {`${props.value?.toString() ?? ""}\n`}
      </div>
    </div>
  );
}

const roleName: Record<string, string> = {
  user: "you",
  assistant: "CX Assistant",
};

function ThinkingIndicator() {
  return (
    <div className="flex flex-col">
      <p className="mb-1 font-medium text-fd-muted-foreground text-sm">
        CX Assistant
      </p>
      <div className="flex items-end gap-1 text-fd-muted-foreground text-sm">
        <div className="flex items-center gap-1 opacity-70">
          <span className="inline-block size-1 animate-bounce rounded-full bg-fd-primary [animation-delay:0ms]" />
          <span className="inline-block size-1 animate-bounce rounded-full bg-fd-primary opacity-80 [animation-delay:150ms]" />
          <span className="inline-block size-1 animate-bounce rounded-full bg-fd-primary [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}

function Message({
  message,
  messages,
  messageIndex,
  isStreaming,
  ...props
}: {
  message: UIMessage;
  messages?: UIMessage[];
  messageIndex?: number;
  isStreaming?: boolean;
} & ComponentProps<"div">) {
  let markdown = "";
  //   let links: z.infer<typeof ProvideLinksToolSchema>["links"] = [];

  for (const part of message.parts ?? []) {
    if (part.type === "text") {
      const textWithCitations = part.text.replace(/\((\d+)\)/g, "");
      markdown += textWithCitations;
      //   continue;
    }

    // if (part.type === "tool-provideLinks" && part.input) {
    //   links = (part.input as z.infer<typeof ProvideLinksToolSchema>).links;
    // }
  }

  // Fix incomplete code blocks for better rendering during streaming
  const codeBlockCount = (markdown.match(/```/g) || []).length;
  if (codeBlockCount % 2 !== 0) {
    // Odd number of ``` means there's an unclosed code block
    markdown += "\n```";
  }

  // Ensure proper spacing around code blocks
  markdown = markdown
    .replace(/```(\w+)?\n/g, "\n```$1\n")
    .replace(/\n```\n/g, "\n```\n\n");

  return (
    <div {...props}>
      <p
        className={cn(
          "mb-1 font-medium text-fd-muted-foreground text-sm",
          message.role === "assistant" && "text-fd-primary"
        )}
      >
        {roleName[message.role] ?? "unknown"}
      </p>
      {/* <div className="prose text-sm">
        <p>{markdown}</p>
      </div> */}
      <MessageContent data-testid="message-content">
        <Response>{sanitizeText(markdown)}</Response>
      </MessageContent>
      {/* {links && links.length > 0 && (
        <div className="mt-3 flex flex-col gap-2">
          <p className="font-medium text-fd-muted-foreground text-xs">
            References:
          </p>
          <div className="flex flex-col gap-1">
            {links.map((item, i) => (
              <Link
                className="flex items-center gap-2 rounded-lg border p-2 text-xs transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
                href={item.url}
                key={i}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="truncate">{item.title || item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )} */}
      {message.role === "assistant" && message.id && !isStreaming && (
        <MessageFeedback
          className="opacity-100 transition-opacity"
          content={markdown}
          //   messageId={message.id}
          //   userMessageId={
          //     messages && messageIndex !== undefined && messageIndex > 0
          //       ? messages[messageIndex - 1]?.id
          //       : undefined
          //   }
        />
      )}
    </div>
  );
}

export function AISearchTrigger() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const chat = useChat({
    id: "search",
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  //   const showSuggestions =
  //     chat.messages.length === 0 && chat.status !== "streaming";

  const onKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Escape" && open) {
      setOpen(false);
      e.preventDefault();
    }

    if (e.key === "/" && (e.metaKey || e.ctrlKey) && !open) {
      setOpen(true);
      e.preventDefault();
    }
  };

  const onKeyPressRef = useRef(onKeyPress);
  onKeyPressRef.current = onKeyPress;
  useEffect(() => {
    const listener = (e: KeyboardEvent) => onKeyPressRef.current(e);
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  return (
    <Context value={useMemo(() => ({ chat, open, setOpen }), [chat, open])}>
      <RemoveScroll enabled={open}>
        <Presence present={open}>
          <div
            className={cn(
              "fixed inset-0 z-30 flex flex-col items-center bg-fd-background/80 backdrop-blur-sm",
              isMobile
                ? "p-4 pb-40"
                : "right-(--removed-body-scroll-bar-size,0) p-2 pb-[8.375rem]",
              open ? "animate-fd-fade-in" : "animate-fd-fade-out"
            )}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setOpen(false);
                e.preventDefault();
              }
            }}
          >
            <div
              className={cn(
                "sticky top-0 flex items-center gap-2 py-2",
                isMobile ? "w-full" : "w-[min(800px,90vw)]"
              )}
            >
              <div className="flex w-full items-center justify-between">
                <Button asChild size="icon-sm" variant={"ghost"}>
                  <Link href="/ai">
                    <MaximizeIcon />
                  </Link>
                </Button>
                <button
                  aria-label="Close"
                  className={cn(
                    buttonVariants({
                      size: isMobile ? "icon" : "icon-sm",
                      variant: "secondary",
                      className: "rounded-full",
                    })
                  )}
                  onClick={() => setOpen(false)}
                  tabIndex={-1}
                  type="button"
                >
                  <X />
                </button>
              </div>
            </div>
            <List
              className={cn(
                "overscroll-contain",
                isMobile
                  ? "w-full px-2 pt-6 pb-28"
                  : "w-[min(800px,90vw)] py-10 pr-2"
              )}
              messageCount={chat.messages.length}
              style={{
                maskImage: isMobile
                  ? "linear-gradient(to bottom, transparent, white 2rem, white calc(100% - 12rem), transparent 100%)"
                  : "linear-gradient(to bottom, transparent, white 4rem, white calc(100% - 2rem), transparent 100%)",
              }}
            >
              <div className="flex flex-col gap-4">
                {chat.messages
                  .filter((msg: UIMessage) => msg.role !== "system")
                  .map((item: UIMessage, index: number) => {
                    const filteredMessages = chat.messages.filter(
                      (msg: UIMessage) => msg.role !== "system"
                    );
                    const isLastMessage = index === filteredMessages.length - 1;
                    const isCurrentlyStreaming =
                      (chat.status === "streaming" ||
                        chat.status === "submitted") &&
                      item.role === "assistant" &&
                      isLastMessage;

                    return (
                      <Message
                        isStreaming={isCurrentlyStreaming}
                        key={item.id}
                        message={item}
                        messageIndex={index}
                        messages={filteredMessages}
                      />
                    );
                  })}
                {chat.status === "submitted" && <ThinkingIndicator />}
              </div>
            </List>
          </div>
        </Presence>
        <div
          className={cn(
            "-translate-x-1/2 fixed z-50 bg-transparent shadow-xl transition-[width,height] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            isMobile ? "bottom-4" : "bottom-4",
            open
              ? isMobile
                ? "h-auto w-[calc(100vw-2rem)] overflow-visible bg-fd-accent/30"
                : "h-auto w-[min(800px,90vw)] overflow-visible bg-fd-accent/30"
              : isMobile
                ? "h-9 w-32 overflow-hidden rounded-2xl bg-fd-secondary text-fd-secondary-foreground shadow-fd-background lg:h-12"
                : "h-10 w-40 overflow-hidden rounded-2xl bg-fd-secondary text-fd-secondary-foreground shadow-fd-background"
          )}
          style={{
            left: "calc(50% - var(--removed-body-scroll-bar-size,0px)/2)",
          }}
        >
          {!open && (
            <Button
              className={cn(
                "absolute inset-0 my-auto flex items-center justify-center rounded-2xl text-center lg:h-12"
              )}
              onClick={() => setOpen(true)}
            >
              <SearchIcon
                className={cn(
                  "absolute left-2",
                  isMobile ? "left-2 size-4" : "size-4.5"
                )}
              />
              <span className={cn(isMobile ? "ml-6" : "")}>Ask AI</span>
            </Button>
          )}
          {open && (
            <div className="flex flex-col">
              <SearchAIInput ismobile={isMobile} />
            </div>
          )}
        </div>
      </RemoveScroll>
    </Context>
  );
}
