/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
/** biome-ignore-all lint/style/noNonNullAssertion: <explanation> */
/** biome-ignore-all lint/complexity/noVoid: <explanation> */
/** biome-ignore-all lint/complexity/noExcessiveCognitiveComplexity: <explanation> */
/** biome-ignore-all lint/a11y/noNoninteractiveElementInteractions: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
"use client";

import { type UseChatHelpers, useChat } from "@ai-sdk/react";
import { Presence } from "@radix-ui/react-presence";
import { DefaultChatTransport } from "ai";
import {
  ArrowUpIcon,
  CopyIcon,
  GlobeIcon,
  InfoIcon,
  MaximizeIcon,
  RefreshCcwIcon,
  SearchIcon,
  ShareIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  TrashIcon,
  X,
} from "lucide-react";
import Link from "next/link";
import {
  type ComponentProps,
  createContext,
  Fragment,
  use,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { RemoveScroll } from "react-remove-scroll";
import type { ChatMessage } from "@/app/api/chat/route";
import { Action, Actions } from "@/components/ai-elements/actions";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  PromptInputHeader,
  type PromptInputMessage,
  PromptInputSpeechButton,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/components/ai-elements/reasoning";
import { Response } from "@/components/ai-elements/response";
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/components/ai-elements/sources";
import { Suggestion, Suggestions } from "@/components/ai-elements/suggestion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Greeting } from "./greeting";
import { suggestions } from "./suggestions";
import { ThinkingIndicator } from "./thinking";
import ChatHouseCards from "./tools/chat-house-cards";
import ChatPlaceCards from "./tools/chat-place-cards";
import ChatRestCards from "./tools/chat-rest-cards";
import SingleRestaurant from "./tools/single-restaurant";

const Context = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
  chat: UseChatHelpers<ChatMessage>;
} | null>(null);

function useChatContext() {
  return use(Context)!.chat;
}

function SearchAIInput() {
  const { status, sendMessage, messages, setMessages } = useChatContext();
  const [input, setInput] = useState("");
  const [webSearch, setWebSearch] = useState(false);
  const isLoading = status === "streaming" || status === "submitted";
  const showSuggestions = messages.length === 0 && !isLoading;

  const handleSuggestionClick = (suggestion: string) => {
    void sendMessage({ text: suggestion });
  };

  const handleClear = () => {
    setMessages([]);
    setInput("");
  };
  const handleSubmit = (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);

    if (!(hasText || hasAttachments)) {
      return;
    }

    sendMessage({
      text: message.text || "Sent with attachments",
      files: message.files,
    });
    setInput("");
  };

  useEffect(() => {
    if (isLoading) document.getElementById("nd-ai-input")?.focus();
  }, [isLoading]);

  return (
    <>
      {showSuggestions && (
        <Suggestions className="mb-2">
          {suggestions.map((suggestion) => (
            <Suggestion
              className="bg-background/80"
              key={suggestion}
              onClick={handleSuggestionClick}
              suggestion={suggestion}
            />
          ))}
        </Suggestions>
      )}
      <div
        className={cn(
          "relative m-[1px] flex flex-col rounded-lg border border-fd-border bg-fd-background shadow-2xl shadow-fd-background",
          isLoading ? "opacity-50" : ""
        )}
      >
        <PromptInput
          autoFocus
          className="flex"
          globalDrop
          multiple
          onSubmit={handleSubmit}
        >
          <PromptInputHeader>
            <PromptInputAttachments>
              {(attachment) => <PromptInputAttachment data={attachment} />}
            </PromptInputAttachments>
          </PromptInputHeader>
          <PromptInputBody>
            <PromptInputTextarea
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                isLoading ? "answering..." : "Looking for services or places ?"
              }
              value={input}
            />
          </PromptInputBody>
          <PromptInputFooter className="flex">
            <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger />
                <PromptInputActionMenuContent>
                  <PromptInputActionAddAttachments />
                </PromptInputActionMenuContent>
              </PromptInputActionMenu>
              <PromptInputButton
                onClick={() => setWebSearch(!webSearch)}
                variant={webSearch ? "default" : "ghost"}
              >
                <GlobeIcon size={16} />
                <span>Search</span>
              </PromptInputButton>

              <PromptInputSpeechButton />
              {messages.length > 1 && (
                <PromptInputButton
                  onClick={() => {
                    if (!isLoading) {
                      handleClear();
                    }
                  }}
                  variant={"ghost"}
                >
                  <TrashIcon size={16} />
                  <span>Clear</span>
                </PromptInputButton>
              )}
            </PromptInputTools>

            <PromptInputSubmit
              className="size-8 rounded-full bg-primary text-primary-foreground transition-colors duration-200 hover:bg-primary/90 hover:text-primary-foreground/90 disabled:bg-muted disabled:text-muted-foreground"
              disabled={!input.trim()}
              status={status}
              variant={"ghost"}
            >
              <ArrowUpIcon size={14} />
            </PromptInputSubmit>
          </PromptInputFooter>
        </PromptInput>

        {showSuggestions && (
          <div className="relative flex items-center gap-1 border-t bg-fd-accent/40 px-4 py-2 text-fd-muted-foreground text-xs">
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
      </div>
    </>
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

export function AISearchTrigger() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const chat = useChat<ChatMessage>({
    id: "search",
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });
  const { messages, status, regenerate } = chat;
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
              "fixed inset-0 z-30 flex flex-col items-center bg-fd-background/80 backdrop-blur-xl",
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
                  : "w-[min(800px,90vw)] py-4 pr-2"
              )}
              messageCount={chat.messages.length}
              style={{
                maskImage: isMobile
                  ? "linear-gradient(to bottom, transparent, white 2rem, white calc(100% - 12rem), transparent 100%)"
                  : "linear-gradient(to bottom, transparent, white 4rem, white calc(100% - 2rem), transparent 100%)",
              }}
            >
              <Conversation className="flex flex-col gap-4">
                <ConversationContent>
                  {messages.length === 0 && <Greeting />}
                  {messages.map((message) => (
                    <div key={message.id}>
                      {message.role === "assistant" &&
                        message.parts.filter(
                          (part) => part.type === "source-url"
                        ).length > 0 && (
                          <Sources>
                            <SourcesTrigger
                              count={
                                message.parts.filter(
                                  (part) => part.type === "source-url"
                                ).length
                              }
                            />
                            {message.parts
                              .filter((part) => part.type === "source-url")
                              .map((part, i) => (
                                <SourcesContent key={`${message.id}-${i}`}>
                                  <Source
                                    href={part.url}
                                    key={`${message.id}-${i}`}
                                    title={part.url}
                                  />
                                </SourcesContent>
                              ))}
                          </Sources>
                        )}

                      {message.parts.map((part, i) => {
                        switch (part.type) {
                          case "text":
                            return (
                              <Fragment key={`${message.id}-${i}`}>
                                <Message from={message.role}>
                                  <MessageContent variant={"flat"}>
                                    <Response>{part.text}</Response>
                                  </MessageContent>
                                </Message>
                                {message.role === "assistant" && (
                                  <Actions>
                                    <Action
                                      label="Retry"
                                      onClick={() => regenerate()}
                                    >
                                      <RefreshCcwIcon className="size-4" />
                                    </Action>
                                    <Action label="Like">
                                      <ThumbsUpIcon className="size-4" />
                                    </Action>
                                    <Action label="Dislike">
                                      <ThumbsDownIcon className="size-4" />
                                    </Action>
                                    <Action label="Share">
                                      <ShareIcon className="size-4" />
                                    </Action>
                                    <Action
                                      label="Copy"
                                      onClick={() =>
                                        navigator.clipboard.writeText(part.text)
                                      }
                                    >
                                      <CopyIcon className="size-4" />
                                    </Action>
                                  </Actions>
                                )}
                              </Fragment>
                            );
                          case "tool-showRestaurants":
                            return (
                              <Fragment key={`${message.id}-${i}`}>
                                <Message
                                  className="flex flex-col"
                                  from={message.role}
                                >
                                  <Response>{part.output?.message}</Response>
                                  {part.output?.restaurants && (
                                    <ChatRestCards
                                      restaurants={part.output.restaurants}
                                    />
                                  )}
                                </Message>
                              </Fragment>
                            );
                          case "tool-showRestaurant":
                            return (
                              <Fragment key={`${message.id}-${i}`}>
                                <Message
                                  className="flex flex-col"
                                  from={message.role}
                                >
                                  <Response>{part.output?.message}</Response>
                                  {part.output?.restaurant && (
                                    <SingleRestaurant
                                      restaurant={part.output.restaurant}
                                    />
                                  )}
                                </Message>
                              </Fragment>
                            );
                          case "tool-showPlaces":
                            return (
                              <Fragment key={`${message.id}-${i}`}>
                                <Message
                                  className="flex flex-col"
                                  from={message.role}
                                >
                                  <Response>{part.output?.message}</Response>
                                  {part.output?.places && (
                                    <ChatPlaceCards
                                      places={part.output.places}
                                    />
                                  )}
                                </Message>
                              </Fragment>
                            );
                          case "tool-showHouses":
                            return (
                              <Fragment key={`${message.id}-${i}`}>
                                <Message
                                  className="flex flex-col"
                                  from={message.role}
                                >
                                  <Response>{part.output?.message}</Response>
                                  {part.output?.houses && (
                                    <ChatHouseCards
                                      houses={part.output.houses}
                                    />
                                  )}
                                </Message>
                              </Fragment>
                            );
                          case "reasoning":
                            return (
                              <Reasoning
                                className="w-full"
                                isStreaming={
                                  status === "streaming" &&
                                  i === message.parts.length - 1 &&
                                  message.id === messages.at(-1)?.id
                                }
                                key={`${message.id}-${i}`}
                              >
                                <ReasoningTrigger />
                                <ReasoningContent>{part.text}</ReasoningContent>
                              </Reasoning>
                            );
                          default:
                            return null;
                        }
                      })}
                    </div>
                  ))}
                  {status === "submitted" && <ThinkingIndicator />}
                </ConversationContent>
                <ConversationScrollButton />
              </Conversation>
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
              <SearchAIInput />
            </div>
          )}
        </div>
      </RemoveScroll>
    </Context>
  );
}
