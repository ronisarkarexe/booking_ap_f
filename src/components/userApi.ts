export const fetchUserData = async (token: string) => {
  try {
    const response = await fetch("http://localhost:8000/api/v1/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};
