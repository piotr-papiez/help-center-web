export async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
    const makeRequest = (): Promise<Response> => {
        return fetch(path, {
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {})
            },
            ...options
        });
    };

    try {
        let response = await makeRequest();
        return response.json() as Promise<T>;
    } catch (error) {
        return { ok: false, message: "SERVER_ERROR" } as T;
    }
}