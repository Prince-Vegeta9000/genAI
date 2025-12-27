# What is LLM ?

- LLM is a Large Language Model which is pre-trained using the large amount of data.
- It process the prompt and generate the output by processing each token at a time using already determined patterns embedded in parameters.

# What is a token ?

- Each input gets divided into some chunks . These chunks are called tokens.
- These tokens are then used by LLM to predict the output.

#What is context window ?

#What is temperature ?

# First API Call

- Get Models

  - https://api.openai.com/v1/models This is a get request to get all the models that OPENAPI has.
  - It requires authorization bearer token which we can generate on the OPENAI platform.

- Chat Completion

  - https://api.openai.com/v1/chat/completions This is a post request to have a conversation or chat with gpt model
  - It requires request body which contains messages array. These array can have an object with the role and content. Role can be user or assistant.
  - Assistant decides the outcome of the request. For example: If i tell an assistant not to reply or reply "I don't have this info" if somebody asks for "Detox".
  - User gives the input
  - See [index.js](index.js)

- Image Completion
  - https://api.openai.com/v1/images/generations This is a post request to generate images.
  - It requires request body which needs prompt as a required input. We can give optional parameters also like "n" which decides the number of images GPT should generate. "size" we can mention the size also
