import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertConsultationRequestSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import type { InsertConsultationRequest } from "@shared/schema";

export default function ConsultationForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertConsultationRequest>({
    resolver: zodResolver(insertConsultationRequestSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      courseInterest: "",
      message: "",
    },
  });

  // Demo mode - simulate successful submission without storing data
  const handleDemoSubmission = () => {
    setIsSubmitting(true);
    
    // Simulate network delay
    setTimeout(() => {
      toast({
        title: "🎉 Demo: Đăng ký thành công!",
        description: "Đây là chế độ demo. Trong thực tế, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      });
      form.reset();
      setIsSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const onSubmit = (data: InsertConsultationRequest) => {
    // Demo mode - show success message without storing data
    handleDemoSubmission();
  };

  return (
    <div id="contact">
      <Card className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
        <CardContent className="p-0">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            ĐĂNG KÝ NGAY ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ
          </h3>
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-success">Cảm ơn bạn đã đăng ký!</p>
              <p className="text-gray-600">Chúng tôi sẽ liên hệ sớm nhất.</p>
            </div>
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  HỌ VÀ TÊN **
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Nhập họ và tên"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  {...form.register("fullName")}
                />
                {form.formState.errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.fullName.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  ĐIỆN THOẠI **
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  {...form.register("phone")}
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  EMAIL
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Nhập email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "ĐANG ĐĂNG KÝ..." : "ĐĂNG KÝ TƯ VẤN"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
