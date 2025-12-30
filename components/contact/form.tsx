'use client'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "../ui/card"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"
import { Send } from "lucide-react"


const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().min(10, { message: "Please enter a valid phone number." }),
    subject: z.string().min(1, { message: "Please select a subject." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("[v0] Contact form submitted:", values)

        toast.success("Message sent successfully!", {
            description: "Our team will get back to you within 24 hours.",
        })

        form.reset()
    }
    return (
        <Card className="border border-border/50 shadow-xl rounded-xl overflow-hidden bg-card">
            <CardContent className="p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="John Doe"
                                                {...field}
                                                className="bg-muted/50 border-none h-12 rounded-xl focus-visible:ring-primary/20"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="john@company.com"
                                                {...field}
                                                className="bg-muted/50 border-none h-12 rounded-xl focus-visible:ring-primary/20"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="07123 456 789"
                                                {...field}
                                                className="bg-muted/50 border-none h-12 rounded-xl focus-visible:ring-primary/20"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Subject</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="bg-muted/50 border-none h-12 rounded-xl focus-visible:ring-primary/20 w-full">
                                                    <SelectValue placeholder="Select a subject" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="mortgage">Mortgage Advice</SelectItem>
                                                <SelectItem value="benefits">Employee Benefits</SelectItem>
                                                <SelectItem value="protection">Protection & Insurance</SelectItem>
                                                <SelectItem value="other">General Inquiry</SelectItem>
                                            </SelectContent>
                                        </Select>
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
                                    <FormLabel>Your Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us how we can help you..."
                                            {...field}
                                            className="bg-muted/50 border-none min-h-[150px] rounded-xl focus-visible:ring-primary/20 resize-none"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold group" size="lg">
                            Send Message{" "}
                            <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default ContactForm