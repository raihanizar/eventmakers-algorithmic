import { DetailEvents } from "@/components/DetailEvents";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Footer } from "@/components/Footer";

export default function Page({ params }) {
  return (
    <main>
      <DashboardHeader />
      <DetailEvents id={params.id} />
      <Footer />
    </main>
  );
}
