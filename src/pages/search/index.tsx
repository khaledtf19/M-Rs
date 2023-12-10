import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CardsGrid from "~/components/card/CardsGrid";
import LoadingCardsGrid from "~/components/card/LoadingCardsGrid";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { CardType } from "~/types/utils";
import { api } from "~/utils/api";

const SearchPage: React.FC = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(0);
  const [pages, setPages] = useState<CardType[][]>([]);

  const { isLoading: isSearchLoading, mutate: mutateSearch } =
    api.search.search.useMutation({
      onSuccess: (newData) => {
        setMaxPages(newData.maxPages);
        const newPages = pages;
        newPages[newData.page - 1] = newData.results;
        setPages(newPages);
      },
    });

  useEffect(() => {
    if (search.length > 0) {
      router.push({ query: { search: search } });
    }
    const timer = setTimeout(() => {
      if (search.length > 0) {
        mutateSearch({ query: search, page: 1 });
      }
      setCurrentPage(1);
      setMaxPages(0);
      setPages([]);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (router.query.search) {
      setSearch(router.query.search as string);
    }
  }, [router.isReady]);

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="w-full md:w-1/2 lg:w-1/3">
        <Input
          type="search"
          placeholder="Title..."
          value={search}
          onChange={(e) => {
            setSearch((prevstate) => {
              return e.target.value;
            });
          }}
        />
      </div>
      {isSearchLoading ? (
        <LoadingCardsGrid
          cards={Array.from({ length: 20 }, (_, i) => ({ id: i + 1 }))}
        />
      ) : (
        <CardsGrid cards={pages[currentPage - 1]} />
      )}
      <div>
        <Button
          onClick={() => {
            if (!pages[currentPage - 1]) {
              mutateSearch({ query: search, page: currentPage - 1 });
            }
            setCurrentPage((prevPage) => prevPage - 1);
          }}
          variant={"outline"}
          disabled={currentPage === 1}
        >
          Prev Page
        </Button>
        <Button
          onClick={() => {
            if (!pages[currentPage]) {
              mutateSearch({ query: search, page: currentPage + 1 });
            }
            setCurrentPage((prevPage) => prevPage + 1);
          }}
          variant={"outline"}
          disabled={maxPages === currentPage || pages.length === 0}
        >
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default SearchPage;
