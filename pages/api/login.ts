import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { loginApi } from "../../utils/api";
import { sessionOptions } from "../../utils/session";

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = await req.body;
  try {
    const data = await loginApi({
      email,
      password,
    });

    req.session.user = data.data;
    await req.session.save();
    res.json(data.data);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);
