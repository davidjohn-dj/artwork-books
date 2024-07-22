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

## Design Decisions

The design decisions for this project were made to ensure a maintainable, scalable, and user-friendly application. Below are the key considerations and rationales behind the choices:

- **Component-Based Architecture**: Components are designed to be reusable and self-contained, making the application easier to maintain and extend.
- **Separation of Concerns**: Each component handles a specific part of the application (e.g., BookList for displaying the list of books, BookDetail for displaying book details, and CommentsForm for handling user comments).
- **Shadcn UI**: Shadcn UI provides a set of pre-built UI components that can be easily customized and extended to fit the application's needs. This ensures a consistent and modern look and feel across the app.
- **TypeScript**: TypeScript is used throughout the project to provide type safety and improve code maintainability. This helps catch errors early in the development process and provides better code documentation.
- **React Hook Form**: `react-hook-form` is used for form handling and validation. It provides a simple and intuitive API for building forms with validation. This helps improve the user experience by providing instant feedback on form errors.
- **Zod**: `zod` is used for form validation. It provides a type-safe schema declaration and validation library that helps catch errors early in the development process. This ensures that the data submitted by users is valid and consistent.
- **Axios**: `axios` is used for making HTTP requests to the API. It provides a simple and easy-to-use API for making HTTP requests and handling responses. This helps fetch data from the API and update the UI based on the response.
- **Pagination**: Pagination is implemented to display a limited number of books per page. This helps improve the user experience by reducing the amount of data to be loaded at once.
- **Comments Form**: A form that allows users to submit comments with validation using `react-hook-form` and `zod`. This helps ensure that the comments submitted by users are valid and consistent.
- **Error Handling**: Error handling is implemented to display error messages to the user when an error occurs. This helps improve the user experience by providing feedback on errors encountered during the form submission process.
- **Loading State**: Loading state is implemented to display a loading/Skeleton indicator while data is being fetched from the API. This helps improve the user experience by providing feedback to the user that the app is working.
- **API Research**: The assignment doesn't provide an API. I had to google and research to find out about the Art Institute of Chicago API. ![Google Research](/google_research.png "Google Research")

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
