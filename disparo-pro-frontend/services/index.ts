import axios, { AxiosInstance, AxiosError } from "axios";

export { AxiosError };

export class HTTPBaseService {
  protected instance: AxiosInstance;
  protected readonly baseURL: string;

  public constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.instance = axios.create({
      baseURL,
    });
  }

  login(user: string, password: string) {
    return this.instance({
      method: "post",
      url: "auth/login/",
      data: {
        user,
        password,
      },
    });
  }

  create(
    name: string,
    email: string,
    password: string,
    phone: string,
    marketing: boolean
  ) {
    return this.instance({
      method: "post",
      url: "accounts/",
      data: {
        name,
        email,
        password,
        phone,
        marketing,
      },
    });
  }
}
