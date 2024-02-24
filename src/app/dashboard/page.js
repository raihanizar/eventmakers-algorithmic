import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { UserDashboard } from "@/components/UserDashboard";

export function session() {
  const token = cookies().get("token")?.value;
  const userData = jwtDecode(token);
  return { token, userData };
}

export async function listEvents() {
  const res = await fetch("https://eventmakers-api.fly.dev/events", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

export default async function Dashboard() {
  const { userData } = session();
  const authorID = userData.id;

  let events;

  const { data } = await listEvents();
  const userEvent = data.filter((item) => item.events.author === authorID);
  events = userEvent;

  return <UserDashboard events={events} userData={userData} />;
}
