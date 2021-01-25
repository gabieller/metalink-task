import ExpertCard from "./ExpertCard";

function SearchResult({ tags }) {
  const experts = tags.map((e) => e.experts).flat();
  const fields = experts.map((e) => e.field);
  const uniqueFields = [...new Set(fields)];

  const fieldIds = uniqueFields.map((field) => {
    const ids = experts.filter((e) => e.field === field).map((e) => e.id);
    return {
      field: field,
      ids: [...new Set(ids)],
    };
  });

  return (
    <div className="grid grid-cols-2 gap-4">
      {fieldIds.map((field) => (
        <section key={field.ids} className="bg-white rounded-lg p-1">
          <header>
            <h1 className="text-sm font-semibold text-gray-500">
              {field.field}
            </h1>
          </header>
          <div className="flex flex-col">
          <div className="flex flex-wrap py-3 gap-3">
            {field.ids.map((id) => (
              <ExpertCard key={id} id={id} tags={tags} />
            ))}
          </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default SearchResult;
