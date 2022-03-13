import { pinsRepo, nft_storage } from "../../../helpers";
export default handler;

async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const result = createPin();
      return res.status(200).end(`get ${result}`);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function createPin() {
    //   const pin_json = { name, image };
    const result = await nft_storage.create(1);
    return result;
  }
}
