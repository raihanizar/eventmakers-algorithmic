import { DashboardHeader } from "@/components/DashboardHeader";
import { Footer } from "@/components/Footer";
import { ListEvents } from "@/components/ListEvents";

export default function Page() {
  return (
    <main>
      <DashboardHeader/>
      <ListEvents />
      <Footer/>
    </main>
  );
}
