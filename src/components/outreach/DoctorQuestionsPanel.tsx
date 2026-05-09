export function DoctorQuestionsPanel({ questions }: { questions: string[] }) {
  return (
    <section className="card rounded-[2rem] p-6">
      <h2 className="text-2xl font-semibold">Questions for your doctor</h2>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-secondary">
        {questions.map((question) => (
          <li key={question}>• {question}</li>
        ))}
      </ul>
    </section>
  );
}
