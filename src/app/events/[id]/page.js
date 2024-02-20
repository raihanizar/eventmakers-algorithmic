import { DetailEvents } from "@/components/DetailEvents";

export default function Page({ params }) {
  return <DetailEvents id={params.id} />;
}
