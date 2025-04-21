export interface TokenDTO {
  accessToken: string;
  refreshToken?: string;
  expiresIn?: number;
}
