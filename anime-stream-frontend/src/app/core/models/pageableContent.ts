export interface PageableResponse {
  content:          Anime[];
  pageable:         string;
  totalPages:       number;
  totalElements:    number;
  last:             boolean;
  size:             number;
  number:           number;
  sort:             Sort;
  numberOfElements: number;
  first:            boolean;
  empty:            boolean;
}

export interface Anime {
  animeType:      string;
  name:           string;
  dateOfRelease: string;
  credits:        string;
  description:    string;
  animeBackdrop: string;
  poster: string;
  origin_country: string;
  videos:         Video[];
  aid:            number;
  trailerLink: string;
}

export interface Video {
  totalTime: string;
  title:     string;
  videoBlobFile: VideoBlob;
  thumbnail: Thumbnail;
  vid:       number;
}

export interface Thumbnail {
  tblob: string;
  tid:   number;
}

export interface VideoBlob {
  vbId: number;
}

export interface Sort {
  empty:    boolean;
  sorted:   boolean;
  unsorted: boolean;
}
