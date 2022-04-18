// Sample isbn
// 0446677450
// 9781451673319
// 1101569182
// 0590996835
// 0810994550
// 054792822X
// 0974571725
// 0747542988
// 0670813028
// 0446310786

// Sample api
// replace 0446310786 with other isbn
// e.g. https://openlibrary.org/api/books?bibkeys=ISBN:0446310786&jscmd=data&format=json

export interface BookData {
  [isbn: string]: Book; // e.g. { ISBN:0446310786: {...} }
};

export interface Book {
  url: string;
  key: string;
  title: string;
  subtitle: string;
  number_of_pages: number;
  authors: Author[];
  cover: Cover;
  // ... there are many other data, but they are not important for this exercise
};

export interface Author {
  url: string;
  name: string;
}

export interface Cover {
  small: string;
  medium: string;
  large: string;
}