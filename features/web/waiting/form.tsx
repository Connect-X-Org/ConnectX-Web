"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheckIcon, Loader2, MailIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";
import { subscribe } from "@/server/subscribe.action";
import { SubFormSchema, type TSubFormSchema } from "./schema";
export default function WaitingListForm() {
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const form = useForm<TSubFormSchema>({
    resolver: zodResolver(SubFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: TSubFormSchema) => {
    setSubmitting(true);

    const createPromise = subscribe(data);

    toast.promise(createPromise, {
      loading: "Joining...",
    });

    try {
      const result = await createPromise;

      if (result?.success) {
        setSubscribed(true); // trigger confirmation message
        form.reset();

        toast.success("Joined successfully", {
          description: "You have been added to the waiting List.",
        });
      }
    } catch {
      toast.error("Failed to join. Please try again.", {
        description: "There was an error joining the list.",
      });
    } finally {
      setSubmitting(false);
    }
  };
  if (subscribed) {
    return (
      <div className="mx-auto max-w-xl py-10">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="font-semibold text-primary/90 text-xl">
            You have been added to the waiting list.
          </p>
          <div className="flex items-center gap-1">
            <CircleCheckIcon className="size-5 text-green-500" />
            <p className="text-muted-foreground text-sm">Thanks for joining!</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-xl py-10">
      <InputGroup className="min-h-12 rounded-full">
        <Form {...form}>
          <form
            className="flex w-full items-center"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex w-full items-center">
                  <FormLabel className="sr-only font-bold">Email</FormLabel>
                  <FormControl>
                    <Input
                      aria-label="Email address"
                      autoComplete="email"
                      className="flex-1 rounded-full border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent"
                      placeholder="Your email address"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <InputGroupAddon>
              <MailIcon />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                className="min-h-10 rounded-full px-6"
                disabled={submitting}
                type="submit"
                variant="default"
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </InputGroupButton>
            </InputGroupAddon>
          </form>
        </Form>
      </InputGroup>
    </div>
  );
}
