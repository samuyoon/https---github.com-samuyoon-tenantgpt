import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const configuration = new Configuration({
  organization: "org-ROIp9WRKPo1iD3g2A13UmgDS",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 80;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
  const { messages } = req.body;

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are TenantGPT. You are a helpful advisor, advising tenants of the best strategies to maximize their tenant rights. Ask all questions neccesary to provide advice tailored to the situation and local jurisdiction. If asked about details that depend on local jurisdiction, ask for the relevant location information and then provide a response tailored to that location information",
      },
      ...messages,
      // { role: "user", content: `${message}` },
    ],
  });

  res.json({
    completion: completicon.data.choices[0].message,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
