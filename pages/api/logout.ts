import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "../../utils/session";

function logoutRoute(req: NextApiRequest, res: NextApiResponse) {
  req.session.destroy();
  res.json({ message: "Logout!" });
}

export default withIronSessionApiRoute(logoutRoute, sessionOptions);
