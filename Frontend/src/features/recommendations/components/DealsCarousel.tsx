import { Button } from "@/components/ui/button";
import { ExternalLink, HardDrive } from "lucide-react";

export function DealsCarousel() {
  const deals = [
    {
      id: 1,
      name: "Samsung T7 Shield 2TB",
      price: "$159.99",
      discount: "Save 20%",
      image: "SSD", // Using icon for now
    },
    {
      id: 2,
      name: "SanDisk Extreme Pro 1TB",
      price: "$119.99",
      discount: "Save 15%",
      image: "SD",
    },
    {
      id: 3,
      name: "Google Cloud 2TB Plan",
      price: "$9.99/mo",
      discount: "First mo free",
      image: "Cloud",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {deals.map((deal) => (
        <div key={deal.id} className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <HardDrive className="h-6 w-6" />
          </div>
          
          <div className="mb-2">
            <span className="inline-block rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-500">
                {deal.discount}
            </span>
          </div>

          <h3 className="font-semibold text-foreground">{deal.name}</h3>
          <p className="text-muted-foreground">{deal.price}</p>
          
          <Button variant="outline" className="mt-4 w-full group-hover:border-primary group-hover:text-primary">
            View Deal <ExternalLink className="ml-2 h-3 w-3" />
          </Button>
        </div>
      ))}
    </div>
  );
}
