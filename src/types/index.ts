export interface ResponseImageType {
  date?: string;
  explanation?: string;
  hdurl?: string;
  mediaType?: string;
  service_version?: string;
  title?: string;
  url?: string;
}

export type RootStackParams = {
  Home: undefined;
  Details: ResponseImageType;
};
