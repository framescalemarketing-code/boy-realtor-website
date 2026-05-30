import Image from "next/image";

interface AgentPhotoProps {
  className?: string;
  priority?: boolean;
  sizes: string;
}

export function AgentPhoto({
  className = "",
  priority = false,
  sizes,
}: AgentPhotoProps) {
  return (
    <Image
      src="/listedbyjeff-pfp.jpg"
      alt="Portrait of Jeff"
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover object-center ${className}`.trim()}
    />
  );
}
