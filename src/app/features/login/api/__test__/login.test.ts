import axios from "axios";
import { login } from '../login';


jest.mock("axios");

describe("login", () => {
  it("正しいデータが送られた時レスポンスを返す", async () => {
    const mockResponse = { data: { token: "abc123" } };
    (axios.post as jest.Mock).mockResolvedValue(mockResponse);

    const props = { email: "test@example.com", password: "password123" };
    const response = await login(props);

    expect(axios.post).toHaveBeenCalledWith("/login", props, { withCredentials: true });
    expect(response).toEqual(mockResponse);
  });

  it("間違ったデータが送られた時エラーを返す。", async () => {
    const mockError = new Error("API error");
    (axios.post as jest.Mock).mockRejectedValue(mockError);

    const props = { email: "test@example.com", password: "password123" };
    await expect(login(props)).rejects.toThrow(mockError);
  });
});
