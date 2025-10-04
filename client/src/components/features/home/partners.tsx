import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Partner } from "@shared/schema";

export default function Partners() {
  const { data: partners, isLoading } = useQuery<Partner[]>({
    queryKey: ["/api/partners"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white" id="partners">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-64 mx-auto mb-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {Array.from({ length: 12 }).map((_, i) => (
              <Skeleton key={i} className="h-16 w-full" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white" id="partners">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">ĐỐI TÁC SAIGONLAB</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partners?.map((partner) => (
            <Card key={partner.id} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0">
              <img 
                src={partner.imageUrl} 
                alt={partner.name} 
                className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
