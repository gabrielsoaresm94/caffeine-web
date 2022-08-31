import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "../../utils/session";

export type User = {
  user: {
    id: string;
    name: string;
    role: string;
    email: string;
    password: string;
    phone1: string;
    phone2: string;
  };
  token: string;
};

async function userRoute(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: boolean; data?: User }>
) {
  if (req.session.user) {
    res.json({
      ok: true,
      data: req.session.user,
    });
  } else {
    res.json({ ok: false });
  }
}

export default withIronSessionApiRoute(userRoute, sessionOptions);
