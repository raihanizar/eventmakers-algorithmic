import { EditEvent } from "@/components/EditEvents";

export async function requestEvent(eventid) {
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

  const event = await requestEvent(id);
  console.log(event);

  return <EditEvent event={event} />;
}
