import { Mail, Phone } from "lucide-react";
import { AgentPhoto } from "./agent-photo";

type AgentCardVariant = "header" | "inline";

interface AgentCardProps {
  variant: AgentCardVariant;
}

export function AgentCard({ variant }: AgentCardProps) {
  if (variant === "header") {
    return (
      <div className="flex items-center gap-3 sm:gap-4 bg-[#eae0cf]/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#7288ae]/20 w-full">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-[#7288ae]/20 bg-[#eae0cf] sm:h-24 sm:w-24">
          <AgentPhoto priority sizes="(min-width: 640px) 96px, 80px" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-base sm:text-lg text-[#111844]">Jeff Lastname</div>
          <div className="text-xs sm:text-sm text-[#4b5694]">
            Your San Diego Agent
          </div>
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="tel:"
              className="flex items-center gap-1 text-[#4b5694] hover:text-[#111844]"
            >
              <Phone className="w-4 h-4" />
              <span className="text-xs">Call</span>
            </a>
            <a
              href="mailto:"
              className="flex items-center gap-1 text-[#4b5694] hover:text-[#111844]"
            >
              <Mail className="w-4 h-4" />
              <span className="text-xs">Email</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3.5 sm:gap-4 mb-2 sm:mb-3 p-3 sm:p-3.5 bg-[#eae0cf]/20 rounded-xl min-w-0">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-[#7288ae]/20 bg-[#eae0cf] sm:h-20 sm:w-20">
        <AgentPhoto sizes="(min-width: 640px) 80px, 64px" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm text-[#111844] truncate">Jeff Lastname</div>
        <div className="text-xs text-[#4b5694]">San Diego Realtor</div>
        <div className="flex gap-2 mt-1">
          <a
            href="tel:"
            className="text-[#4b5694] hover:text-[#111844] p-1 -m-1"
            aria-label="Call Jeff"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href="mailto:"
            className="text-[#4b5694] hover:text-[#111844] p-1 -m-1"
            aria-label="Email Jeff"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
