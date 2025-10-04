import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertConsultationRequestSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import type { InsertConsultationRequest } from "@shared/schema";

export default function ContactConsultationForm() {
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
        title: "🎉 Demo: Gửi yêu cầu thành công!",
        description: "Đây là chế độ demo. Trong thực tế, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      });
      form.reset();
      setIsSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const onSubmit = (data: InsertConsultationRequest) => {
    // Demo mode - show success message without storing data
    handleDemoSubmission();
  };

  return (
    <Card className="bg-white rounded-lg shadow-lg">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Gửi Yêu Cầu Tư Vấn
        </h3>
        <p className="text-gray-600 mb-8">
          Điền thông tin để chúng tôi có thể hỗ trợ bạn tốt nhất
        </p>
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-green-600">Cảm ơn bạn đã gửi yêu cầu!</p>
            <p className="text-gray-600">Chúng tôi sẽ liên hệ sớm nhất có thể.</p>
          </div>
        ) : (
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Họ và tên *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Nhập họ tên của bạn"
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
                  Điện thoại *
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
            </div>
            
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Nhập email của bạn"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                {...form.register("email")}
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
            
            <div>
              <Label htmlFor="courseInterest" className="block text-sm font-medium text-gray-700 mb-2">
                Khóa học quan tâm
              </Label>
              <Input
                id="courseInterest"
                type="text"
                placeholder="Ví dụ: CCNA Security, CEH, ..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                {...form.register("courseInterest")}
              />
              {form.formState.errors.courseInterest && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.courseInterest.message}
                </p>
              )}
            </div>
            
            <div>
              <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Tin nhắn
              </Label>
              <Textarea
                id="message"
                placeholder="Nhập câu hỏi hoặc yêu cầu tư vấn của bạn..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                {...form.register("message")}
              />
              {form.formState.errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Đang gửi..." : "Gửi Yêu Cầu"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}