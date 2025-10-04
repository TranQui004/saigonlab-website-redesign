import { useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface CourseReviewProps {
  courseTitle: string;
}

export default function CourseReview({ courseTitle }: CourseReviewProps) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleStarClick = (starRating: number) => {
    setRating(starRating);
  };

  const handleStarHover = (starRating: number) => {
    setHoveredRating(starRating);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập tên của bạn",
        variant: "destructive",
      });
      return;
    }

    if (rating === 0) {
      toast({
        title: "Lỗi", 
        description: "Vui lòng chọn số sao đánh giá",
        variant: "destructive",
      });
      return;
    }

    // Simulate submission since this is a demo
    setIsSubmitted(true);
    toast({
      title: "Cảm ơn bạn đã đánh giá!",
      description: "Đánh giá của bạn đã được ghi nhận. Website này chỉ là demo nên đánh giá sẽ không được lưu trữ.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setName("");
      setContent("");
      setRating(0);
      setHoveredRating(0);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Cảm ơn bạn đã đánh giá!</h3>
          <p className="text-gray-600 mb-4">
            Đánh giá của bạn về khóa học <strong>{courseTitle}</strong> đã được ghi nhận.
          </p>
          <p className="text-sm text-gray-500">
            * Website này chỉ là demo nên đánh giá sẽ không được lưu trữ
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Đánh giá khóa học</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="reviewer-name" className="block text-sm font-medium text-gray-700 mb-2">
              Tên của bạn <span className="text-red-500">*</span>
            </label>
            <Input
              id="reviewer-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập tên của bạn"
              required
            />
          </div>

          {/* Content Input */}
          <div>
            <label htmlFor="review-content" className="block text-sm font-medium text-gray-700 mb-2">
              Nội dung đánh giá <span className="text-gray-500">(tùy chọn)</span>
            </label>
            <Textarea
              id="review-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Chia sẻ trải nghiệm của bạn về khóa học..."
              rows={4}
            />
          </div>

          {/* Star Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Đánh giá <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={() => handleStarHover(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="p-1 transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= (hoveredRating || rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    } transition-colors`}
                  />
                </button>
              ))}
              {rating > 0 && (
                <span className="ml-2 text-sm text-gray-600">
                  {rating} trên 5 sao
                </span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full" size="lg">
            Gửi đánh giá
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            * Website này chỉ là demo nên đánh giá sẽ không được lưu trữ
          </p>
        </form>
      </CardContent>
    </Card>
  );
}