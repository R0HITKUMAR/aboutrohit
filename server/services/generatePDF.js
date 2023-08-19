import puppeteer from "puppeteer";
import AWS from "aws-sdk";

const generatePDF = async () => {
  const url =
    "https://s3-eu-west-1.amazonaws.com/htmlpdfapi.production/free_html5_invoice_templates/example3/index.html";
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page
    .goto(url, {
      waitUntil: "networkidle2",
    })
    .catch((err) => {
      console.log(err);
    });

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    // Set Margin
    margin: {
      top: "20px",
      bottom: "20px",
      left: "20px",
      right: "20px",
    },
  });

  // Upload to AWS
  var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  const filename =
    timestamp +
    "xxxxxxxxxxxxxxxx"
      .replace(/[x]/g, function () {
        return ((Math.random() * 16) | 0).toString(16);
      })
      .toLowerCase() +
    ".pdf";

  // Upload file to S3
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  s3.upload({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: filename,
    Body: pdf,
    ContentType: "application/pdf",
  })
    .on("httpUploadProgress", function (evt) {
      console.log(parseInt((evt.loaded / evt.total) * 100));
    })
    .send(function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("File Uploaded Successfully", data);
      }
    });

  await browser.close();
};

export default generatePDF;
