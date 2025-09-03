import { Project } from "@/lib/projects";

interface ProjectArchitectureProps {
  project: Project;
}
export const ProjectKeyFeatures = ({ project }: ProjectArchitectureProps) => {
  return (
    <div
      className='space-y-12 animate-slideUp'
      style={{ animationDelay: "0.8s" }}
    >
      {/* Key Features */}
      <div>
        <h2 className='heading-primary text-text-primary mb-6'>Key Features</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {project.keyFeatures.map((feature, index) => (
            <div key={index} className='flex items-start gap-3'>
              <div className='w-2 h-2 rounded-full bg-text-primary mt-3 flex-shrink-0'></div>
              <p className='body-text text-text-primary'>{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
