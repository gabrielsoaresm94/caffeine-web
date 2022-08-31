import fetchJson from "./fetchJson";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface ILoginBody {
  email: string;
  password: string;
}

interface ILoginResponse {
  message: string;
  data: {
    user: {
      id: string;
      name: string;
      role: string;
      email: string;
      password: string;
      phone1: string;
      phone2: string;
    };
    token: string;
  };
}

export interface ICompany {
  id: string;
  cnpj: string;
  name: string;
  socialreason: string;
  email: string;
  phone: string;
  information: string;
  shopman: {
    email: string;
    id: string;
    name: string;
    password: string;
    phone1: string;
    phone2: string;
    role: string;
  };
}

interface ICompaniesResponse {
  message: string;
  data: ICompany[];
}

export function loginApi(loginBody: ILoginBody) {
  return fetchJson<ILoginResponse>(`${baseUrl}/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginBody),
  });
}

export function listCompaniesApi(cnpj: string, token: string) {
  return fetchJson<ICompaniesResponse>(`${baseUrl}/companies?cnpj=${cnpj}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
