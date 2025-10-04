import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Bell } from "lucide-react";

const newsletterSchema = z.object({
  email: z.string().email("Email không hợp lệ").min(1, "Email là bắt buộc"),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

export default function NewsletterSignup() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: NewsletterForm) => {
    // Demo notification only - no actual data storage
    toast({
      title: "Cảm ơn bạn đã đăng ký!",
      description: "Đây chỉ là thông báo demo - không có thông tin nào được gửi đi",
    });
    form.reset();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-white shadow-xl border-0">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-3">
                Đăng ký nhận tin
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nhận thông báo về khóa học mới, ưu đãi giảm giá và tin tức từ Saigon Lab
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-green-600 mb-2">Cảm ơn bạn!</p>
                <p className="text-gray-600">Email đã đăng ký nhận tin từ Saigon Lab</p>
                <p className="text-sm text-orange-500 mt-2 font-medium">Đây chỉ là thông báo demo</p>
              </div>
            ) : (
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Nhập email của bạn để đăng ký
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                      className="pl-10 py-3 text-base border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      {...form.register("email")}
                      data-testid="input-newsletter-email"
                    />
                  </div>
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg transform hover:scale-105"
                  data-testid="button-newsletter-signup"
                >
                  Đăng Ký Nhận Tin
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}