import { useEffect, useState } from "react";
import CardsGrid from "~/components/card/CardsGrid";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { api } from "~/utils/api";

const SearchPage: React.FC = () => {
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);


  const {data, isLoading, mutate: mutateSearch} = api.search.search.useMutation({})
  useEffect(() => {
    let timer = setTimeout(() => {
      mutateSearch({ query: search, page: 1}) 
    }, 1500);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    console.log("currentPage", currentPage);
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="w-full md:w-1/2 lg:w-1/3">
        <Input
          type="search"
          placeholder="Title..."
          value={search}
          onChange={(e) => {
            setSearch((prevstate) => {
              if (prevstate !== e.target.value) {
                console.log(e.target.value, "here");
                setCurrentPage(1);
              }
              return e.target.value;
            });
          }}
        />
      </div>
      <CardsGrid cards={data?.results} />
      {isLoading && <div>Loading...</div>}
      <div>
        <Button
          onClick={async () => {
            mutateSearch({ query: search, page: currentPage + 1 });
            setCurrentPage((prevPage) => prevPage + 1);
          }}
          variant={"outline"}
          /* disabled={!Q.hasNextPage} */
        >
          Next Page
        </Button>
        <Button
          onClick={async () => {            
            mutateSearch({ query: search, page: currentPage - 1 });
            setCurrentPage((prevPage) => prevPage - 1);
          }}
          variant={"outline"}
          // disabled={!Q.hasPreviousPage}
        >
          Prev Page
        </Button>
      </div>
    </div>
  );
};

export default SearchPage;
