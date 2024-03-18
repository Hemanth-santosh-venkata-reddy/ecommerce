const baseurl = "https://02a3-182-156-148-35.ngrok-free.app/";

export const registeration = async (registerationdata) => {
  try {
    const response = fetch(`${baseurl}registerUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerationdata),
    });
    if (!response.ok) {
      throw new Error(`HTTP error !Status: ${response.status}`);
    }
    const data = (await response).json();
    console.log(data, "Response from register API");
    return data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export const login = async (logindata) => {
  try {
    const response = await fetch(`${baseurl}loginUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logindata),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const local = localStorage.setItem("login", JSON.stringify(data.data));
    console.log(data, "Response from login API");
    return data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};
