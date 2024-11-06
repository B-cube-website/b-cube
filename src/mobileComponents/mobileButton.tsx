interface MobileButtonProps {
    activity: string;
    selected: boolean;
    onClick: () => void;
  }
  
  export default function MobileButton({
    activity,
    selected,
    onClick,
  }: MobileButtonProps) {
    return (
      <button
        className={`flex justify-center items-center px-4 py-1 rounded-[40px] ${
          selected
            ? "text-[#14439f] bg-white"
            : "bg-[#7380b0]/5 border border-[#191f35] text-[#7380b0]"
        } h-[40px] w-[91px] whitespace-nowrap`}
        onClick={onClick}
      >
        <p className="text-sm font-semibold text-center whitespace-nowrap">
          {activity}
        </p>
      </button>
    );
  }
  