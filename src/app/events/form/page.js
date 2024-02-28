"use client";

import { DashboardHeader } from "@/components/DashboardHeader";
import { Footer } from "@/components/Footer";
import { CreateEvent } from "@/components/CreateEvent";
import React from "react";

export default function page() {
  return (
    <main>
      <DashboardHeader />
      <CreateEvent />
      <Footer />
    </main>
  );
}
