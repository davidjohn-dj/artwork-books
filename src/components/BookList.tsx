import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  fetchArtworks,
  searchArtworks,
  fetchCategories,
} from "../services/apiService";
import Pagination from "./Pagination";
import { BookArtwork } from "./BookArtwork";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { Book } from "../types";
import { CrossCircledIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface SearchFormValues {
  query: string;
  category: string;
}

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [categories, setCategories] = useState<{ id: string; title: string }[]>(
    []
  );
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const form = useForm<SearchFormValues>({
    defaultValues: {
      query: "",
      category: "all",
    },
  });

  const { setValue } = form;

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const categoryData = await fetchCategories();
        setCategories(categoryData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategoryData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      if (isSearching) {
        const response = await searchArtworks(
          query,
          category !== "all" ? category : "",
          currentPage
        );
        setBooks(response.data);
        setTotalPages(Math.ceil(response.pagination.total / 12));
      } else {
        const response = await fetchArtworks(currentPage);
        setBooks(response.data);
        setTotalPages(Math.ceil(response.pagination.total / 12));
      }
      setIsLoading(false);
    };

    fetchData();
  }, [currentPage, isSearching, query, category]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (data: SearchFormValues) => {
    setIsSearching(true);
    setQuery(data.query);
    setCategory(data.category);
    searchArtworks(
      data.query,
      data.category !== "all" ? data.category : "",
      1
    ).then((response) => {
      setBooks(response.data);
      setTotalPages(Math.ceil(response.pagination.total / 12));
      setCurrentPage(1);
    });
  };

  return (
    <div className="container">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSearch)}
          className="search-form"
        >
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Search by title</FormLabel>
                <FormControl>
                  <Input placeholder="Search by title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select
                    defaultValue={field.value}
                    onValueChange={(value: string) => {
                      setValue("category", value);
                    }}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        <SelectItem value="all">All</SelectItem>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.title}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end items-end gap-4">
            <Button type="submit">
              <MagnifyingGlassIcon className="h-4 w-4" />
              &nbsp;Search
            </Button>
            {isSearching && (
              <Button
                variant={"destructive"}
                onClick={() => {
                  setIsSearching(false);
                  setValue("query", "");
                  setQuery("");
                  setValue("category", "");
                  setCategory("");
                }}
              >
                <CrossCircledIcon className="h-4 w-4" />
                &nbsp;Clear
              </Button>
            )}
          </div>
        </form>
      </Form>
      <div className="divider mb-4" />
      <div className="grid justify-center">
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => (
              <Skeleton key={index} className="w-[250px] h-[330px]" />
            ))
          : books.map((book) => (
              <Link to={`/detail/${book.id}`} key={book.id}>
                <BookArtwork
                  book={book}
                  className="w-[250px]"
                  aspectRatio="portrait"
                  width={250}
                  height={330}
                />
              </Link>
            ))}
      </div>
      <div className="divider mb-4" />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BookList;
