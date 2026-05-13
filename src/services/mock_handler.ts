export const isMockMode = process.env.NEXT_PUBLIC_USE_MOCKS === "true";

export async function fetchMock<T>(path: string): Promise<T> {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`Mock data not found for path: ${path}`);
  }
  return res.json();
}
