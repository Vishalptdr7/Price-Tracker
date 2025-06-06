// cron/priceChecker.js
import cron from "node-cron";
import Product from "../models/product.js";
import { getPriceFromURL } from "../utils/scraper.js";
import { sendEmail } from "../utils/mailer.js";

export const startCronJob = () => {
  cron.schedule("0 */5 * * *", async () => {
    console.log("🔄 Running price check...");

    const products = await Product.find().populate("user", "email");

    for (const p of products) {
      try {
        const latestPrice = await getPriceFromURL(p.url);

        if (latestPrice <= p.targetPrice) {
          await sendEmail(user.email, p.productName, latestPrice, p.url);
        }

        p.currentPrice = latestPrice;
        p.lastChecked = new Date();

        // ✅ Add to price history
        p.priceHistory.push({ price: latestPrice, checkedAt: new Date() });

        await p.save();
      } catch (err) {
        console.error("Scraping failed for:", p.url, err.message);
      }
    }
  });
};
