import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
const ContactDetails = () => {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="border-none bg-muted/30">
                    <CardContent className="pt-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                            <Phone className="text-primary w-5 h-5" />
                        </div>
                        <h3 className="font-bold mb-1 uppercase tracking-wider text-sm">Call Us</h3>
                        <p className="text-muted-foreground">+44 (0) 20 1234 5678</p>
                    </CardContent>
                </Card>
                <Card className="border-none bg-muted/30">
                    <CardContent className="pt-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                            <Mail className="text-primary w-5 h-5" />
                        </div>
                        <h3 className="font-bold mb-1 uppercase tracking-wider text-sm">Email Us</h3>
                        <p className="text-muted-foreground">hello@benefitbridge.co.uk</p>
                    </CardContent>
                </Card>
                <Card className="border-none bg-muted/30">
                    <CardContent className="pt-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                            <MapPin className="text-primary w-5 h-5" />
                        </div>
                        <h3 className="font-bold mb-1 uppercase tracking-wider text-sm">Office</h3>
                        <p className="text-muted-foreground">123 Financial District, London, EC1A 1BB</p>
                    </CardContent>
                </Card>
                <Card className="border-none bg-muted/30">
                    <CardContent className="pt-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                            <Clock className="text-primary w-5 h-5" />
                        </div>
                        <h3 className="font-bold mb-1 uppercase tracking-wider text-sm">Hours</h3>
                        <p className="text-muted-foreground">Mon - Fri: 9am - 6pm</p>
                    </CardContent>
                </Card>
            </div>

            <div className="bg-primary text-primary-foreground p-6 rounded-xl relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">FCA Regulated Advice</h3>
                    <p className="opacity-80 mb-6 leading-relaxed">
                        Benefit Bridge is fully authorised and regulated by the Financial Conduct Authority (FCA), ensuring
                        you receive professional, ethical advice at all times.
                    </p>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5" />
                        <span className="text-sm font-medium uppercase tracking-widest">Trust & Security Guaranteed</span>
                    </div>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Landmark className="w-32 h-32" />
                </div>
            </div>
        </div>
    )
}

export default ContactDetails


function Landmark(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="3" y1="22" x2="21" y2="22" />
            <line x1="6" y1="18" x2="6" y2="11" />
            <line x1="10" y1="18" x2="10" y2="11" />
            <line x1="14" y1="18" x2="14" y2="11" />
            <line x1="18" y1="18" x2="18" y2="11" />
            <polygon points="12 2 20 7 4 7" />
        </svg>
    )
}
