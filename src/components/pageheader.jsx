export default function PageHeader({ title = 'Dashboard', breadcrumb = [], action }) {
  return (
    <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
        {Array.isArray(breadcrumb) && breadcrumb.length > 0 ? (
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500">
            {breadcrumb.map((item, idx) => (
              <span key={`${item}-${idx}`} className="flex items-center gap-2">
                <span>{item}</span>
                {idx < breadcrumb.length - 1 && <span className="text-slate-400">/</span>}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      {action ? (
        <div>{action}</div>
      ) : null}
    </div>
  );
}
