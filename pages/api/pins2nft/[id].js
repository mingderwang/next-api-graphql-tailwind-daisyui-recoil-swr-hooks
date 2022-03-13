import { pinsRepo, nft_storage } from "../../../helpers";
export default handler;

function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getPinById();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  function getPinById() {
    const pin = pinsRepo.getById(req.query.id);
    return res.status(200).json({});
  }
}
