"use client";

interface PageProps {
  subscriptionPlan: Awaited<ReturnType<typeof getUserSubscriptionPlan>>;
}

const Dashboard = () => {
  return <h1>This is Dashboard comp</h1>;
};

export default Dashboard;
