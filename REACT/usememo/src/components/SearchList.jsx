import { useMemo, useState } from "react";

const users = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `User ${i}`,
}));

function SearchList() {
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h3>User Search</h3>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search user"
      />

      <ul>
        {filteredUsers.slice(0, 10).map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchList;
