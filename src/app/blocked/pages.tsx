export default function BlockedPage() {
  return (
    <div>
      <h1 className="text-white">접근이 제한되었습니다</h1>
      <p className="text-white">
        요청 횟수를 초과하셨습니다. 잠시 후 다시 시도해주세요.
      </p>
    </div>
  );
}
