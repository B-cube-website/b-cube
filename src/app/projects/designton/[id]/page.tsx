
export default function DesigntonDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main>
      <h1>디자인톤 상세 {id}</h1>
    </main>
  );
}
