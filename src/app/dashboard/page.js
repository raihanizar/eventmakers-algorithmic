import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { UserDashboard } from "@/components/UserDashboard";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Footer } from "@/components/Footer";

export function getUsers() {
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
  const { userData } = getUsers();

  const { data } = await listEvents();
  const authoredEvent = data.filter((item) => item.events.author === userData.id);
  const joinedEvent = data.filter((item) => item.participants.some(participant => participant.email === userData.email));

  console.log(userData)
  console.log(data)
  console.log(joinedEvent)
  console.log(authoredEvent)

  return (
    <main>
      <DashboardHeader />
      <UserDashboard authoredEvent={authoredEvent} joinedEvent={joinedEvent} />
      <Footer />
    </main>
  );
}
