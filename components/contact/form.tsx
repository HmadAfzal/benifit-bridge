"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import emailjs from '@emailjs/browser';
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required." }),
  lastName: z.string().min(2, { message: "Last name is required." }),
  companyName: z.string().min(2, { message: "Company name is required." }),
  contactNumber: z.string().min(10, { message: "Contact number is required." }),
  businessEmail: z.string().email({ message: "Invalid email address." }),
  employeeCount: z.string().optional(),
  query: z.string().min(10, { message: "Please provide a description." }),
})


export function ContactForm() {
  const [IsSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      contactNumber: "",
      businessEmail: "",
      employeeCount: "",
      query: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    const sairahServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_SAIRAH
    const sairahTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SAIRAH
    const sairahUserId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID_SAIRAH

    const businessServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_BUSINESS
    const businessTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_BUSINESS
    const businessUserId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID_BUSINESS

    emailjs
      .send(
        sairahServiceId || "",
        sairahTemplateId || "",
        {
          firstName: values.firstName,
          lastName: values.lastName,
          companyName: values.companyName,
          contactNumber: values.contactNumber,
          businessEmail: values.businessEmail,
          employeeCount: values.employeeCount,
          query: values.query,
        },
        sairahUserId || ""
      )
       emailjs
      .send(
        businessServiceId || "",
        businessTemplateId || "",
        {
          firstName: values.firstName,
          lastName: values.lastName,
          companyName: values.companyName,
          contactNumber: values.contactNumber,
          businessEmail: values.businessEmail,
          employeeCount: values.employeeCount,
          query: values.query,
        },
        businessUserId || ""
      )
      .then(
        (result) => {
          toast.success("Message sent successfully.")
          form.reset()
        },
        (error) => {
          toast("Failed to send message. Please try again later.")
          console.log(error)
        }
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">
                  First Name<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} className="border border-border" />
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
                <FormLabel className="font-bold">
                  Last Name<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} className="border border-border" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">
                  Company Name<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} className="border border-border" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">
                  Contact Number<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} className="border border-border" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="businessEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">
                  Email<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} type="email" className="border border-border" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="employeeCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Number of employees</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border border-border">
                      <SelectValue placeholder="Please Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1-10">1-10</SelectItem>
                    <SelectItem value="11-50">11-50</SelectItem>
                    <SelectItem value="51-200">51-200</SelectItem>
                    <SelectItem value="201-500">201-500</SelectItem>
                    <SelectItem value="500+">500+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">
                Message
              </FormLabel>
              <FormControl>
                <Textarea {...field} className="min-h-[120px] border border-border" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <p className="text-sm text-gray-600 leading-relaxed">
          Benefit Bridge needs the contact information you provide to us to contact you about our products and
          services. For information on our privacy practices and commitment to protecting your privacy, please review our{" "}
          <a href="/privacy-policy" className="text-primary underline hover:no-underline transition-all">
            Privacy Policy
          </a>
          .
        </p>

        <Button
          type="submit"
          className="px-10 py-6 rounded-[4px] font-bold text-lg"
        >
         {IsSubmitting ? <Loader2 className="animate-spin"/> : "Submit"}
        </Button>
      </form>
    </Form>
  )
}
