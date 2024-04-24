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
import { Sparkles, Trash } from "lucide-react";
import { Textarea } from "@/src/components/ui/textarea";
import React from "react";
import { Progress } from "@/src/components/ui/progress";

const formSchema = z.object({
  message: z.string().min(2).max(50),
});

export default function Home() {
  const [passwordGenerator, setPasswordGenerator] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading) return;
    const formdata = new FormData(event.currentTarget);
    const message = formdata.get("message") as string;
    setIsLoading(true);
    setPasswordGenerator("");
    const result = await fetch("/api/passwordGenerator", {
      method: "POST",
      body: JSON.stringify({ message }),
    });

    if (result.ok) {
      try {
        const json = await result.json();
        setIsLoading(false);
        setPasswordGenerator(json.code);
      } catch (error) {
        console.error("Erreur lors de l'analyse de la réponse JSON :", error);
      }
    } else {
      console.error("Erreur de réponse de l'API :", result.statusText);
    }
  };

  return (
    <Layout className="h-full relative">
      {isLoading ? (
        <div className="absolute top-4 left-0 right-0 flex items-center justify-center">
          <Progress value={progress} className="w-[60%]" />
        </div>
      ) : null}
      <div>
        <p>{passwordGenerator}</p>
      </div>
      <div className="flex justify-center mt-10">
        <Form {...form}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-row justify-center items-center space-x-5"
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
            <Button type="button" className="bg-[#171E25] hover:bg-slate-800">
              <Trash
                className="cursor-pointe dark:text-white"
                size={20}
                onClick={() => setPasswordGenerator("")}
              />
            </Button>
          </form>
        </Form>
      </div>
    </Layout>
  );
}
