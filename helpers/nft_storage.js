import * as dotenv from "dotenv";
import { NFTStorage, File } from "nft.storage";
import { pack } from "ipfs-car/pack";

dotenv.config();

const create = async (i) => {
  console.log("ipfs create pin ", i);
  const apiKey = process.env.NFT_STORAGE_KEY;
  const client = new NFTStorage({ token: apiKey });

  const metadata = await client.store({
    name: "Pinpie",
    description: "Pin is not delicious beef!",
    image: new File(
      [
        /* data */
      ],
      "pinpie.jpg",
      { type: "image/jpg" }
    ),
  });
  console.log(metadata.url);
  return i;
};

export const nft_storage = {
  create,
};
