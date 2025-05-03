import { NextApiRequest, NextApiResponse } from "next";
import { initializeDatabase } from "./database";

type ApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse,
  dataSource: Awaited<ReturnType<typeof initializeDatabase>>
) => Promise<void | NextApiResponse>;

export function withDatabase(handler: ApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const dataSource = await initializeDatabase();
      return await handler(req, res, dataSource);
    } catch (error) {
      console.error("API error:", error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  };
}