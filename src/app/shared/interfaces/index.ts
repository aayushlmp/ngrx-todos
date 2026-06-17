// 1. Send this to your HTTP service
export interface PaginationParams {
  limit: number;     // Active chunk index
  skip?: number;     // Items limit per chunk
  select?: string;
  total?: number;
}
export interface SearchParams {
  q?: string;
}
export interface OrderByParams {
  order?: string;
  sortBy?: string;  
}
// 2. Separate metadata for flexible code re-use
export interface PageMetadata {
  total: number; 
  skip: number;
  limit: number;
}
export type ParamsOptions = PaginationParams & SearchParams & OrderByParams;