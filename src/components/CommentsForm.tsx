import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  CommentsFormSchema,
  CommentsFormValues,
} from "../schemas/commentsFormSchema";

const CommentsForm: React.FC = () => {
  const form = useForm<CommentsFormValues>({
    resolver: zodResolver(CommentsFormSchema),
  });

  const onSubmit = (data: CommentsFormValues) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="comments-form">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              {form.formState.errors.name && (
                <FormMessage>{form.formState.errors.name.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Your Email" {...field} />
              </FormControl>
              {form.formState.errors.email && (
                <FormMessage>{form.formState.errors.email.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Textarea placeholder="Your Comment" {...field} />
              </FormControl>
              {form.formState.errors.comment && (
                <FormMessage>
                  {form.formState.errors.comment.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <div className="flex justify-end content-end mt-4">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default CommentsForm;
