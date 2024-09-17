interface ActivityButtonProps {
  activity: string;
  selected: boolean;
  onClick: () => void;
}

export default function ActivityButton({
  activity,
  selected,
  onClick,
}: ActivityButtonProps) {
  return (
    <button
      className={`flex justify-center items-center px-12 py-4 rounded-[100px] ${
        selected
          ? "text-[#14439f] bg-white"
          : "bg-[#7380b0]/5 border-[#191f35] text-[#7380b0]"
      } w-auto min-w-[100px] whitespace-nowrap`}
      onClick={onClick}
    >
      <p className="text-xl font-semibold text-center whitespace-nowrap">
        {activity}
      </p>
    </button>
  );
}
