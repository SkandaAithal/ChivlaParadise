"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { BASE_URL, OFFICIAL_EMAIL } from "@/lib/contants";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^(\+91[\-\s]?)?[6789]\d{9}$/,
      "Please enter a valid Indian phone number (10 digits starting with 6, 7, 8, or 9)"
    ),
  message: z.string().min(1, "Please enter your message"),
});

const ContactForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      toast.success("Message sent successfully", {
        position: "bottom-right",
        theme: "dark",
      });
      router.push("/contact");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const onValid = () => {
    formRef.current?.submit();
  };

  const onInvalid = () => {
    toast.error("Please fill all the fields and try again.", {
      position: "bottom-right",
      theme: "dark",
    });
  };

  return (
    <Card className="border-none bg-[#fffff9] shadow-2xl transition-all duration-300 text-black">
      <CardContent className="px-8 py-4">
        <Form {...form}>
          <form
            ref={formRef}
            onSubmit={form.handleSubmit(onValid, onInvalid)}
            action={`https://formsubmit.co/${OFFICIAL_EMAIL}`}
            method="POST"
            className="space-y-6"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Contact Form Message"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="basic" />
            <input
              type="hidden"
              name="_next"
              value={`${BASE_URL}/contact?success=true`}
            />

            <input
              type="text"
              name="_honey"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      className=""
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className=""
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your phone number"
                      {...field}
                      className=""
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      className="h-[150px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-fit bg-gradient-to-r from-green-900 to-[#009669] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 !h-auto"
            >
              Send Message
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
