interface MobileProjectButtonProps {
    activity: string;
    selected: boolean;
    onClick: () => void;
  }
  
  export default function MobileProjectButton({
    activity,
    selected,
    onClick,
  }: MobileProjectButtonProps) {
    return (
      <button
        className={`flex justify-center items-center px-4 py-1 rounded-[40px] ${
          selected
            ? "text-[#14439f] bg-white"
            : "bg-[#7380b0]/5 border border-[#191f35] text-[#7380b0]"
        } h-[40px] w-[79px] whitespace-nowrap`}
        onClick={onClick}
      >
        <p className="text-sm font-semibold text-center whitespace-nowrap">
          {activity}
        </p>
      </button>
    );
  }
  