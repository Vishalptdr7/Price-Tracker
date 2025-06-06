import axios from "axios";
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import puppeteerExtra from "puppeteer-extra";

puppeteerExtra.use(StealthPlugin());

// Amazon Scraper (Axios + Cheerio)
export const getPriceFromAmazon = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/113 Safari/537.36",
      },
    });
    const $ = cheerio.load(data);
    const priceText = $("span.a-price-whole")
      .first()
      .text()
      .replace(/[^\d]/g, "");
    const price = parseFloat(priceText);
    if (!price) throw new Error("Amazon price not found");

    return price;
  } catch (err) {
    throw new Error("Amazon price scraping failed: " + err.message);
  }
};

// Flipkart Scraper (Puppeteer)
export const getPriceFromFlipkart = async (url) => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
      "(KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
  );

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });

    // Close login popup if it appears
    try {
      await page.waitForSelector("._2KpZ6l._2doB4z", { timeout: 3000 });
      await page.click("._2KpZ6l._2doB4z");
    } catch {}

    // ✅ Corrected delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const priceSelectors = [".Nx9bqj.CxhGGd", ".Nx9bqj", ".CxhGGd"];
    let priceText = null;

    for (const selector of priceSelectors) {
      const exists = await page.$(selector);
      if (exists) {
        priceText = await page.$eval(selector, (el) => el.textContent);
        break;
      }
    }

    await browser.close();

    if (!priceText) throw new Error("Price element not found");

    return parseFloat(priceText.replace(/[₹,]/g, ""));
  } catch (err) {
    await browser.close();
    throw new Error("Flipkart price scraping failed: " + err.message);
  }
};

// Unified Handler
export const getPriceFromURL = async (url) => {
  if (url.includes("amazon")) return await getPriceFromAmazon(url);
  if (url.includes("flipkart")) return await getPriceFromFlipkart(url);
  throw new Error("Unsupported site");
};
