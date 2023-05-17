import { getUser} from './../../lib/api/users';

export default async function handler(
    req,
    res
) {
    if (req.method === 'GET') {
        try {
            //const result = await searchUser(req.query.query);
            const result = await getUser(req.query.username);
            return res.status(200).json(result);
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                error: e.toString()
            });
        }
    }  else {
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}