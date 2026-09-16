"use client";

export type UserRole = "Owner / Admin" | "Front Desk" | "Senior Nail Artist";

export type AuthUser = {
  name: string;
  email: string;
  role: UserRole;
  avatarInitials: string;
  token: string;
  loginTime: string;
};

const AUTH_STORAGE_KEY = "topcoat_fake_auth_user";

export const DEFAULT_USER: AuthUser = {
  name: "Ritu Sharma",
  email: "ritu.sharma@topcoat.com",
  role: "Owner / Admin",
  avatarInitials: "RS",
  token: "fake-jwt-token-topcoat-2026",
  loginTime: new Date().toISOString(),
};

export function getStoredUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AuthUser;
  } catch (e) {
    return null;
  }
}

export function setStoredUser(user: AuthUser): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  } catch (e) {
    console.error("Failed to save auth state to localStorage", e);
  }
}

export function removeStoredUser(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  } catch (e) {
    console.error("Failed to clear auth state", e);
  }
}

export function performFakeLogin(email?: string, role: UserRole = "Owner / Admin"): AuthUser {
  const nameFromEmail = email ? email.split("@")[0].replace(/[._]/g, " ") : "Ritu Sharma";
  const formattedName = nameFromEmail
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const initials = formattedName
    .split(" ")
    .map((n) => n.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");

  const user: AuthUser = {
    name: formattedName || "Ritu Sharma",
    email: email || "admin@topcoat.com",
    role: role,
    avatarInitials: initials || "RS",
    token: `fake-jwt-${Math.random().toString(36).substring(2)}`,
    loginTime: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  };

  setStoredUser(user);
  return user;
}
