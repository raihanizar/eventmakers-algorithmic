import { EditEvent } from "@/components/EditEvents";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Footer } from "@/components/Footer";

export async function getEvent(eventid) {
  const res = await fetch(`https://eventmakers-api.fly.dev/events/${eventid}`, {
    method: "GET",
    cache: "no-cache",
  });

  const { data } = await res.json();
  if (!!res.ok) {
    return data;
  } else {
    throw new Error(data.message);
  }
}

export default async function Page({ params }) {
  const { id } = params;

  const event = await getEvent(id);

  return (
    <main>
      <DashboardHeader />
      <EditEvent event={event} />
      <Footer />
    </main>
  );
}
