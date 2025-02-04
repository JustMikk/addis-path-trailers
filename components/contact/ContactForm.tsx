"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2, "Name must be at least 2 characters"),
  lastName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="py-12 md:py-32 bg-white ">
      <div className=" mx-auto px-4 md:px-12 lg:px-16 lg:max-w-[1440px] p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                Get in <span className="text-blue-600">touch</span>
              </h2>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-blue-50 border-blue-500/30 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="first name here"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-blue-50 border-blue-500/30 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="last name here"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-blue-50 border-blue-500/30 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="email here"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-blue-50 border-blue-500/30 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="phone number here"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a few words"
                          className="min-h-[150px] bg-blue-50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
                  SEND MESSAGE
                </Button>
              </form>
            </Form>
          </div>
          <Card
            className="relative text-white bg-black overflow-hidden"
            style={{
              backgroundImage: "url('/assets/images/trailers-2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gray-900/80"></div>

            {/* Content */}
            <CardContent className="relative p-8 z-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Our contact detail</h2>
                <p className="text-gray-300">
                  Need any consultations contact with us
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Phone Number</h3>
                      <p className="text-gray-300">+1 (414) 595-0096</p>
                      {/* <p className="text-gray-300">(+44)123 456 789</p> */}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Email Address</h3>
                      <p className="text-gray-300">
                        info@addispathtrailers.com
                      </p>
                      {/* <p className="text-gray-300">contact@addisPath.com</p> */}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Location</h3>
                      <p className="text-gray-300">
                        290 Jackson Place NW,
                        <br />
                        Lilburn, GA 30047
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href="#"
                    className="p-2 bg-white/10 rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white/10 rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white/10 rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white/10 rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
