import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <Card className="gradient-border bg-card group hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] cursor-pointer">
      <CardHeader>
        <CardTitle className="gradient-text text-xl font-extrabold group-hover:scale-105 transition-transform duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
