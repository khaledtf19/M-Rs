import { useState } from "react";
import CardsGrid from "~/components/card/CardsGrid";
import { Input } from "~/components/ui/input";
import { api } from "~/utils/api";

const SearchPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const Q = api.search.search.useInfiniteQuery(
    {
      query: search,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
      getPreviousPageParam: (lastPage) => lastPage.prevPage,
      initialCursor: 1,
    }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="w-full md:w-1/2 lg:w-1/3">
        <Input
          type="search"
          placeholder="Title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <CardsGrid cards={Q.data?.pages[0]?.results} />
    </div>
  );
};

export default SearchPage;
