"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Layout } from "@/src/components/layout/Layout";
import { z } from "zod";
import { Button } from "@/src/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sparkles } from "lucide-react";
import { Textarea } from "@/src/components/ui/textarea";
import React from "react";
import { Progress } from "@/src/components/ui/progress";

const formSchema = z.object({
  message: z.string().min(2).max(50),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout className="h-full relative">
      <div className="absolute top-4 left-0 right-0 flex items-center justify-center">
        <Progress value={progress} className="w-[60%]" />
      </div>
      <div className="flex justify-center mt-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-row justify-center space-x-5"
          >
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Enter your message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              Submit <Sparkles className="ml-2" size={20} />
            </Button>
          </form>
        </Form>
      </div>
    </Layout>
  );
}
