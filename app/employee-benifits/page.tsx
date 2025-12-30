import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, UserCheck, ShieldCheck, Heart, Zap, Clock, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import EmployeeBenifitsHero from "@/components/employee-benifits/employee-benifits-hero"
import EmployerBenifits from "@/components/employee-benifits/employer-benifits"
import EmployeeBenifits from "@/components/employee-benifits/employee-benifits"
import Process from "@/components/employee-benifits/process"
import Callout from "@/components/employee-benifits/callout"

export default function EmployeeBenefitsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center">
      <EmployeeBenifitsHero />
      <EmployerBenifits />
      <EmployeeBenifits />
      <Process />
      <Callout />
    </div>
  )
}
