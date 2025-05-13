
export default function WorkflowCard({ title, description }) {
  return (
    <div className="border rounded p-4 shadow-sm">
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
