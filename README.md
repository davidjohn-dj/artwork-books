# Artwork Booklist React App

This is a React application that displays a list of books fetched from the Art Institute of Chicago API. The app allows users to search for books by title, filter by category, view book details, and submit comments. The project uses `react-hook-form` for form handling and `zod` for form validation, along with Shadcn UI components for a consistent and modern UI.

## Features

- **Book List**: Displays a paginated list of books with title and thumbnail.
- **Search**: Allows users to search for books by title.
- **Filter**: Users can filter books by category.
- **Book Details**: Displays detailed information about a selected book.
- **Comments**: Users can submit comments with validation.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static types.
- **React Hook Form**: Performant, flexible, and extensible forms with easy-to-use validation.
- **Zod**: TypeScript-first schema declaration and validation library.
- **Shadcn UI**: Component library for building consistent and modern user interfaces.
- **Axios**: Promise-based HTTP client for the browser and Node.js.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/davidjohn-dj/artwork-books.git
   cd artwork-books
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

To start the development server, run:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

### Building for Production

To create a production build, run:

```bash
npm run build
```

The production-ready files will be in the build directory.

## Project Structure

```plaintext
src/
├── components/
│   ├── BookArtwork.tsx
│   ├── BookDetail.tsx
│   ├── BookList.tsx
│   ├── CommentsForm.tsx
│   ├── Pagination.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── textarea.tsx
│   └── ...
├── schemas/
│   ├── commentsFormSchema.ts
├── services/
│   ├── apiService.ts
├── types/
│   ├── index.ts
└── ...
```

## Key Components

### BookList

Displays a paginated list of books and includes search and filter functionality.

### BookDetail

Displays detailed information about a selected book and includes the CommentsForm.

### CommentsForm

A form that allows users to submit comments with validation using `react-hook-form` and `zod`.

### UI Components

Custom UI components (button, card, form, input, select, textarea) built with Shadcn UI for a consistent look and feel.

## API Integration

The app integrates with the Art Institute of Chicago API to fetch book data. Key API endpoints used include:

- Fetch Artworks: /artworks
- Search Artworks: /artworks/search

## Validation

Form validation is handled by `react-hook-form` and `zod`. The validation schema for the comments form is defined in `schemas/commentsFormSchema.ts`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
