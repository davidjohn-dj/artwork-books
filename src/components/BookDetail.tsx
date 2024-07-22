import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "./ui/card";
import { fetchArtworkDetail } from "../services/apiService";
import CommentsForm from "./CommentsForm";
import { Book } from "../types";
import { BookArtwork } from "./BookArtwork";

const BookDetail: React.FC = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book>({
    id: "",
    title: "",
    image_id: "",
    artist_display: "",
    date_display: "",
    main_reference_number: "",
    dimensions: "",
    api_link: "",
  });

  useEffect(() => {
    fetchArtworkDetail(id).then((data) => {
      setBook(data.data);
    });
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-4">
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>
      <Card>
        <BookArtwork
          book={book}
          className="w-[auto]"
          aspectRatio="portrait"
          width={843}
          height={330}
          notitle
        />
        <CardContent>
          <CardTitle className="text-2xl">{book.title}</CardTitle>
          <CardDescription>Artist: {book.artist_display}</CardDescription>
          <CardDescription>Date: {book.date_display}</CardDescription>
          <CardDescription>
            Reference Number: {book.main_reference_number}
          </CardDescription>
          <CardDescription>Dimensions: {book.dimensions}</CardDescription>
        </CardContent>
      </Card>
      <h4 className="mt-8 text-xl font-bold">Comments</h4>
      <CommentsForm />
    </div>
  );
};

export default BookDetail;
