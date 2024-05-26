import { writable } from "svelte/store";
import { authApi } from "@/api";
import { redirect } from "@/utils/router/routing";

export const user = writable(JSON.parse(null || localStorage.user || null));

user.subscribe((value) => (localStorage.user = JSON.stringify(value)));

export const getUserId = () => {
  let val;
  user.subscribe((value) => (val = value));
  return val ? val.id : null;
};

export const isLoggedIn = () => {
  let val;
  user.subscribe((value) => (val = value));
  return !!val;
};

export const isAdmin = () => {
  let val;
  user.subscribe((value) => (val = value));
  return val && val.role === "ADMIN";
};

export const logout = async () => {
  user.set(null);
  redirect("Auth");
};
