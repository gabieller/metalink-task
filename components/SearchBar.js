import { useState } from "react";

function SearchedItems({ tags, onRemove }) {
  if (tags.length === 0) return null;
  return tags
    .map((tag, i) => (
      <span key={tag.tag} className="text-2xl">
        {tag.tag}
        <button className="text-sm align-top" onClick={() => onRemove(i)}>
          <img src="images/close-x.svg" alt="Logo" />
        </button>
      </span>
    ))
    .reduce((prev, curr) => [prev, " + ", curr]);
  }


function SearchBar({ tags, setTags }) {
  const [searchValue, setSearchValue] = useState("");

  const relatedTags = tags.map((e) => e.related_tags).flat();
  // gets unique tags from tag state, and filters out the ones that were searched.
  const uniqueRelatedTags = [...new Set(relatedTags)].filter((e) => {
    const tagIndex = tags.findIndex(({ tag }) => tag === e);
    return tagIndex === -1;
  });

  const searchExperts = async (value = searchValue) => {
    const existingTags = tags.map(({ tag }) => tag);
    if (!existingTags.includes(value)) {
      const res = await fetch(`/api/experts?q=${value}`);
      const parserdJson = await res.json();
      setTags([...tags, ...parserdJson]);
    }
    setSearchValue("");
  };

  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      searchExperts();
    }
  };

  const onRemoveTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  return (
    <div className="bg-black bg-opacity-90 text-white rounded-t-md p-1">
      <span className="text-sm">Search</span>
      <div className="px-5">
        <div>
          <span className="pr-3">
            <SearchedItems tags={tags} onRemove={onRemoveTag} />
          </span>
          <span>
            <input
              placeholder={tags.length === 0 ? "Search..." : ""}
              className="bg-transparent focus:outline-none text-2xl placeholder-gray-200 placeholder-opacity-50"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyUp={onKeyUp}
            />
          </span>
        </div>
        <hr className="border-white" />
        <div className="h-8">
          {uniqueRelatedTags.map((tag) => (
            <span
              key={tag}
              className="text-sm cursor-pointer mr-2 hover:bg-white hover:bg-white hover:text-black rounded-sm text-center"
              onClick={() => searchExperts(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
