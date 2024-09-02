/**
 * Generated by orval v7.0.1 🍺
 * Do not edit manually.
 * K-Combo API
 * The K-Combo REST API description
 * OpenAPI spec version: 1.0
 */
export interface SendNvimDataDto {
  /** The id token string */
  id_token: string;
  /** The total number of keys pressed in new combo */
  total_key_pressed: number;
}

export interface AuthDto {
  /** The user email */
  email: string;
  /** The user password */
  password: string;
}

export interface GetUsersResponseDto {
  /** Number of users returned */
  count: number;
  /** Array of users */
  data: User[];
  /** Array of users */
  message: string;
  /** Array of users */
  status: number;
}

export interface UpdateUserScoreDto {
  /** The duration of the combo expressed in seconds */
  combo_duration_in_seconds: number;
  /** The unique user id_token */
  id_token: number;
  /** The new set score */
  score: number;
  /** Combo updated at */
  score_updated_at: string;
  /** The total number of key pressed during the combo */
  total_key_pressed: number;
}

export interface ScoreInfo {
  /** When the score was achieved */
  achieved_at: string;
  /** The combo duration in seconds */
  combo_duration_in_seconds: number;
  /** The score of the user */
  score: number;
  /** The total number of keys pressed */
  total_key_pressed: number;
}

export interface SchemaObjectId { [key: string]: unknown }

export interface User {
  /** The unique identifier for the user */
  _id: SchemaObjectId;
  accessToken: string;
  /** The creation date of the user */
  created_at: string;
  /** The email of the user */
  email: string;
  /** The first name of the user */
  first_name: string;
  id_token: string;
  /** The last name of the   user */
  last_name: string;
  /** The password of the user */
  password: string;
  refreshToken: string;
  /** The score history of the user */
  scores: ScoreInfo[];
  /** The username of the user */
  username: string;
}

export interface CreateUserDto {
  /** The email of the user */
  email: string;
  /** The name of the user */
  first_name: string;
  /** The second name of the user */
  last_name: string;
  /** The password of the user */
  password: string;
  /** The username of the user */
  username: string;
}

