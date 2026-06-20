import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col p-6 rounded-xl bg-surface-container-lowest shadow-sm duration-300">
      <div className="mb-4">
        <div className="flex items-center p-3 w-max h-max justify-start rounded-xl bg-secondary-container/20 text-primary">
          <div className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full">
            {icon}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold text-on-background mb-1">
        {title}
      </h3>
      <p className="text-body-sm text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
}
