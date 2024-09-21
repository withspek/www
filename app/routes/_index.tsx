import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Spek / Powerful Communities" },
    {
      name: "description",
      content: "Realtime developer communites open to the public internet.",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1>Hello world</h1>
    </div>
  );
}
