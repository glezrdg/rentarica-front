import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const TRELLO_API_KEY = "85bad6ab0bd478243d68211a132bdb07";
    const TRELLO_TOKEN =
      "27d3d7dfb68e13da96e6da6da85fda31570554db1e30a3a347e4a838ae79dd1f";
    const TRELLO_LIST_ID = "eTbxJBSE"; // Replace with your Leads-Website list ID

    try {
      const response = await fetch(
        `https://api.trello.com/1/cards?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}&idList=${TRELLO_LIST_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: `Lead: ${name}`,
            desc: `Email: ${email}\nMessage: ${message}`,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create Trello card");
      }

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
