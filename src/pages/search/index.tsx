import { useState } from "react";
import CardsGrid from "~/components/card/CardsGrid";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { api } from "~/utils/api";

const SearchPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const Q = api.search.search.useInfiniteQuery(
    {
      query: search,
    },
    {
      getNextPageParam: (lastPage) =>
        lastPage.maxPages < currentPage + 1 ? undefined : lastPage.nextPage,
      getPreviousPageParam: (lastPage) =>
        currentPage === 0 ? undefined : lastPage.prevPage,
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
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(0);
          }}
        />
      </div>
      <CardsGrid cards={Q.data?.pages[currentPage]?.results} />
      {Q.isFetching && <div>Loading...</div>}
      <div>
        <Button
          onClick={() => {
            Q.fetchNextPage();
            setCurrentPage((prevPage) => prevPage + 1);
          }}
          variant={"outline"}
          disabled={!Q.hasNextPage}
        >
          Next Page
        </Button>
        <Button
          onClick={() => {
            Q.fetchPreviousPage();
            setCurrentPage((prevPage) => prevPage - 1);
          }}
          variant={"outline"}
          disabled={!Q.hasPreviousPage}
        >
          Prev Page
        </Button>
      </div>
    </div>
  );
};

export default SearchPage;
