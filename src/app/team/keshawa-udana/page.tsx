export const metadata = {
  title: "NOVAA demo - Keshawa",
};

export default function KeshawaUdana() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center text-balance text-center">
      {/* Delete this if you want ! */}
      <h1 className="mb-8 text-4xl sm:text-5xl">Your Progress</h1>
      <ul className="steps steps-vertical mb-8 lg:steps-horizontal">
        <li className="step step-primary">Join</li>
        <li className="step step-primary">Collaborate</li>
        <li className="step step-primary">create/update</li>
        <li className="step">push</li>
        <li className="step">Review</li>
        <li className="step">Deploy</li>
      </ul>
      Keshawa{"'"}s page.
    </main>
  );
}
