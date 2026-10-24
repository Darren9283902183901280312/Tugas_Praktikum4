import { Suspense } from "react";
import HobbyDetail from "@/components/HobbyDetail";

export function generateStaticParams() {
  return [
    { hobbyid: "anime" },
    { hobbyid: "gaming" },
    { hobbyid: "music" },
  ];
}

export default function HobbyRoute({params,}: {
  params: Promise<{ hobbyid: string }>;}) {
  return (
    <Suspense fallback={<p>Memuat daftar...</p>}>
      <HobbyRouteContent params={params} />
    </Suspense>
  );
}

async function HobbyRouteContent({params,}: {
  params: Promise<{ hobbyid: string }>;}) {
  const { hobbyid } = await params;

  return <HobbyDetail category={hobbyid} />;
}
