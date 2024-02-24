import { useRouter } from "next/navigation";
import React from "react";

export const DeleteEvents = () => {
  const router = useRouter();

  async function handleDelete() {
    const res = await fetch("https://eventmakers-api.fly.dev/events/", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    router.refresh();
    toast.success("berhasil di hapus");
  }

  return <div>DeleteEvents</div>;
};
