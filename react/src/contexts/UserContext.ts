import { createContext } from "react";
import type { UserConnected } from "../stores/auth/interfaces";

// Theme context provider
export const UserContext = createContext<UserConnected | null>(null);
