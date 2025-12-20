const fetchApi = async (url, method = "GET", body = null) => {
  const token = "";
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  headers.append("Content-Type", `application/json`);
  let options = {
    method,
    headers,
  };
  if (body !== null) options = { ...options, body: JSON.stringify(body) };
  const result = await fetch(url, { ...options });
  return result;
};

const getModelsList = async () => {
  const api = "https://api.openai.com/v1/models";
  try {
    const result = await fetchApi(api);
    if (!result.ok) console.log("Error ----", result);
    return await result.json();
  } catch (e) {
    console.log(e);
  }
};

const finModel = async () => {
  const modelToFind = "gpt-4o-mini";
  const response = await getModelsList();
  console.log(response);
  if (response?.data) {
    const [model] = response.data.filter((model) => model.id === modelToFind);
    return model.id;
  }
};

const chatCompletion = async () => {
  const chatCompletionApi = "https://api.openai.com/v1/chat/completions";
  const model = await finModel();
  console.log("model", model);
  const body = {
    model: "gpt-4o-mini",
    messages: [
      {
        role: "assistant",
        content: "Hello",
      },
    ],
  };
  try {
    const result = model && (await fetchApi(chatCompletionApi, "POST", body));
    if (!result.ok) console.log("Error", await result.json());
    const response = await result.json();
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

chatCompletion();
